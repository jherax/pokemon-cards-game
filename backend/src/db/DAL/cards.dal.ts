/** @see https://www.slingacademy.com/article/sequelize-js-optimize-queries-to-boost-performance */

import {Op} from 'sequelize';
import {v4 as uuidv4} from 'uuid';

import type {PokemonCard} from '../../../types/Pokemon.tcg.v2';
import {Card} from '../models/Card';
import {CardTypes} from '../models/CardTypes';
import {PokemonType} from '../models/PokemonType';

export async function create(card: PokemonCard): Promise<Card> {
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

export async function getByType(
  cardType: string,
  pageSize: number,
  page: number,
): Promise<PokemonCard[]> {
  const cards = await Card.findAll({
    attributes: ['json'],
    include: [
      {
        model: CardTypes,
        required: true,
        attributes: [], // removed from SELECT
        include: [
          {
            model: PokemonType,
            required: true,
            attributes: [],
            where: {
              type: cardType,
            },
          },
        ],
      },
    ],
    // TODO: Use raw subquery
    // limit: pageSize,
    // offset: pageSize * (page - 1),
  });

  return cards.map<PokemonCard>(card => {
    return JSON.parse(card.json);
  });
}

export async function getByName(
  cardName: string,
  pageSize: number,
  page: number,
): Promise<PokemonCard[]> {
  const cards = await Card.findAll({
    attributes: ['json'],
    where: {
      name: {
        // [Op.match]: sequelize.fn('to_tsquery', cardName),
        [Op.iLike]: `${cardName}%`,
      },
    },
    limit: pageSize,
    offset: pageSize * (page - 1),
  });

  return cards.map<PokemonCard>(card => {
    return JSON.parse(card.json);
  });
}
