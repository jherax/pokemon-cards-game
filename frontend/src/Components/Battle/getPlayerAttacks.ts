/* eslint-disable curly */
import type {ICard} from '../../types/pokemon-tcg-v2';

export default function getPlayerAttacks(card: PokeCard | ICard) {
  return {
    name: card.name,
    hp: getNumber(card.hp),
    types: card.types as PokeTypesName[],
    weaknesses: operationsBuilder(card.weaknesses),
    resistances: operationsBuilder(card.resistances),
    attacks: (card.attacks || []).map(attack => ({
      damage: getNumber(attack.damage),
      cost: attack.cost as PokeTypesName[],
      name: attack.name,
      text: attack.text,
      used: false,
    })),
  };
}

// MODULE INTERNALS
// ================

const NOT_NUMBER = /\D+|\s+/g;
const NOT_DIGIT = /\D/;

function getNumber(value?: string): number {
  const number = value?.replace(NOT_NUMBER, '');
  return parseFloat(number ?? '0') || 0;
}

function operationsBuilder(weakResist?: PokeWeakResist[]) {
  return (weakResist || []).map<Operations>(attr => {
    const [operator, rawValue] = attr.value.split(NOT_DIGIT);
    const value = +rawValue;
    return {
      type: attr.type,
      value: value,
      operate: (attack: number) => {
        if (operator === '×') return attack * value;
        if (operator === '-') return attack - value;
        return attack + value;
      },
    };
  });
}

type Operations = {
  type: string;
  value: number;
  operate: (attack: number) => number;
};
