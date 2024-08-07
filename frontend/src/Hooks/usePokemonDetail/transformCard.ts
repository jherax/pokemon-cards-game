/* eslint-disable curly */
import {v4 as uuidv4} from 'uuid';

type PowerType = keyof typeof POWER_COLOR;

const POWER_COLOR = {
  'Poké-Body': '#5FBD58',
  'Poké-Power': '#D3425F',
  'Pokémon Power': '#FA8581',
  Ability: '#CC0000',
};

export function transformCard(
  card: PokeCard,
  pokemonTypes: GobalState['localTypes'],
) {
  // eslint-disable-next-line curly
  if (!card || typeof card === 'string') return null;
  const {nationalPokedexNumber: pokedex} = card;
  const cardDetail: PokeCardDetail = {
    title: `${card.name} #${pokedex || 'N/A'}`,
    subtitle: `${card.supertype} - ${card.subtype}`,
    svgImage: `https://veekun.com/dex/media/pokemon/dream-world/${pokedex}.svg`,
    image: card.imageUrlHiRes,
    types: buildPokeCardTypes(card.hp, pokemonTypes, card.types),
    attacks: buildPokeCardAttacks(card.attacks, pokemonTypes),
    miscellaneous: buildPokeCardMisc(card, pokemonTypes),
  };

  const {ability, text: rules} = card;
  if (ability) {
    cardDetail.ability = {
      title: ability.name,
      type: ability.type,
      color: POWER_COLOR[ability.type as PowerType],
      text: [ability.text],
    };
  }

  if (rules) {
    cardDetail.rules = {
      title: 'Rules',
      text: rules,
    };
  }

  return cardDetail;
}

function buildPokeCardTypes(
  hp: string,
  pokemonTypes: GobalState['localTypes'],
  cardTypes: PokeTypesName[] = [],
): PokeCardDetailType[] {
  const text = `HP ${hp || 'N/A'}`;
  return cardTypes.map(name => {
    const {bg, img} = pokemonTypes[name] || pokemonTypes.Unknown;
    return {index: uuidv4(), name, text, img, bg, size: 'small'};
  });
}

function buildPokeCardAttacks(
  attacks: PokeAttack[],
  pokemonTypes: GobalState['localTypes'],
): PokeCardDetail['attacks'] {
  if (!attacks?.length) return undefined;

  const detailAttacks = attacks.map(attack => {
    const damage = attack.damage ? `| ${attack.damage}` : '';
    const detailAttack: PokeCardDetailAttack = {
      ...attack,
      damage,
      cost: attack.cost.map(name => {
        const {bg, img} = pokemonTypes[name] || pokemonTypes.Unknown;
        return {index: uuidv4(), name, img, bg, size: 'small'};
      }),
    };
    return detailAttack;
  });

  return {
    title: 'Attacks',
    attacks: detailAttacks,
  };
}

type MiscAttr = {
  title: string;
  attr: Array<{
    type?: string;
    value?: string;
  }>;
};

function buildPokeCardMisc(
  card: PokeCard,
  pokemonTypes: GobalState['localTypes'],
): PokeCardDetailMisc[] {
  const retreatCost = card.retreatCost || [''];
  const template: MiscAttr[] = [
    {title: 'Weakness', attr: card.weaknesses || [{value: 'N/A'}]},
    {title: 'Resistance', attr: card.resistances || [{value: 'N/A'}]},
    {title: 'Retreat Cost', attr: retreatCost.map(type => ({type}))},
    {title: 'Rarity', attr: [{value: card.rarity || 'N/A'}]},
    {title: 'Set', attr: [{value: card.set || 'N/A'}]},
    {title: 'Artist', attr: [{value: card.artist || 'N/A'}]},
  ];

  return template.map(({title, attr}) => {
    return {
      title,
      boxes: attr.map(({type, value}) => {
        const name = type as PokeTypesName;
        const text = type ? (value ?? '') : (value ?? 'N/A');
        const {bg, img} = pokemonTypes[name] || pokemonTypes.Unknown;
        return {index: uuidv4(), name, text, img, bg, size: 'xsmall'};
      }),
    } as PokeCardDetailMisc;
  });
}
