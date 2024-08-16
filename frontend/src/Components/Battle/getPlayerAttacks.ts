/* eslint-disable curly */

export default function getPlayerAttacks(card: ICard): CardPlayer {
  return {
    name: card.name,
    hp: getNumber(card.hp),
    types: card.types,
    weaknesses: operationsBuilder(card.weaknesses),
    resistances: operationsBuilder(card.resistances),
    attacks: (card.attacks || []).map(attack => ({
      damage: getNumber(attack.damage),
      cost: attack.cost,
      name: attack.name,
      text: attack.text,
      used: false,
    })),
  };
}

export type CardPlayer = {
  name: string;
  hp: number;
  types: PokemonTypes[];
  weaknesses: Operations[];
  resistances: Operations[];
  attacks: {
    damage: number;
    name: string;
    text: string;
    used: boolean;
    cost: PokemonTypes[];
  }[];
};

type Operations = {
  type: PokemonTypes;
  value: number;
  operate: (attack: number) => number;
};

// MODULE INTERNALS
// ================

const NOT_NUMBER = /\D+|\s+/g;

function getNumber(value?: string): number {
  const number = value?.replace(NOT_NUMBER, '');
  return parseFloat(number ?? '0') || 0;
}

function operationsBuilder(weakResist?: IResistWeak[]) {
  return (weakResist || []).map<Operations>(attr => {
    const operator = attr.value.charAt(0);
    const rawValue = attr.value.slice(1);
    const value = +rawValue || 0;
    return {
      value: value,
      type: attr.type,
      operate: (attack: number) => {
        if (operator === '×') return Math.max(0, attack * value);
        if (operator === '-') return Math.max(0, attack - value);
        return Math.max(0, attack + value);
      },
    };
  });
}
