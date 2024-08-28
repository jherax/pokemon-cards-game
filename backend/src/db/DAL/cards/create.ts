/** @see https://www.slingacademy.com/article/sequelize-js-optimize-queries-to-boost-performance */

import {Op} from 'sequelize';
import {v4 as uuidv4, validate as uuidValidate} from 'uuid';

import type {PokemonCard} from '../../../../types/Pokemon.tcg.v2';
import {Card} from '../../models/Card';
import {CardTypes} from '../../models/CardTypes';
import {PokemonType} from '../../models/PokemonType';

export async function saveCard(jsonCard: string): Promise<Card> {
  // As the pokemon-tcg api may change,
  // and this backend service has a schema validator,
  // we receive the card as JSON in order to
  // pass the validation.
  const card: PokemonCard = JSON.parse(jsonCard);
  const validId = uuidValidate(card.id);
  const existCard = await (validId
    ? Card.findByPk(card.id)
    : Promise.resolve(null));
  return existCard ? update(card) : create(card);
}

async function create(card: PokemonCard): Promise<Card> {
  const pokeTypes = await PokemonType.findAll({
    attributes: ['id'],
    where: {
      type: {[Op.or]: card.types},
    },
  });

  card.id = uuidv4();
  card.custom = true;
  const newCard = await Card.create({
    id: card.id,
    name: card.name,
    json: JSON.stringify(card),
  });

  await CardTypes.bulkCreate(
    pokeTypes.map(pt => ({cardId: newCard.id, typeId: pt.id})),
  );

  return newCard;
}

async function update(card: PokemonCard): Promise<Card> {
  const [, updatedCards] = await Card.update(
    {json: JSON.stringify(card)},
    {
      where: {id: card.id},
      returning: true,
    },
  );

  return updatedCards[0];
}
