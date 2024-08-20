import fieldPrefix from '../../utils/fieldPrefix';
import {specialKeys} from './allowedKeys';

/**
 * @see https://bulbapedia.bulbagarden.net/wiki/HP_(TCG)#List_of_cards_by_HP
 */
export const MAX_HP = 340;

/**
 * @see https://www.gamersdecide.com/articles/pokemon-tcg-best-attack-cards
 * @see https://screenrant.com/pokemon-tcg-highest-base-attack-damages-ranked
 */
export const MAX_ATTACK = 300;

const {ATTACK, WEAKNESS, RESISTANCE} = fieldPrefix;
const WEAK_RESIST = new RegExp(`^${WEAKNESS}|^${RESISTANCE}`);

function validateField(fieldName: string, value: string): boolean {
  const num = +value;
  if (fieldName === 'hp') {
    return num > 0 && num <= MAX_HP;
  }
  if (fieldName.startsWith(ATTACK)) {
    return num > 0 && num <= MAX_ATTACK;
  }
  if (WEAK_RESIST.test(fieldName)) {
    return (specialKeys.includes(value[0]) ? +value.slice(1) : num) > 0;
  }
  return true;
}

function getErrors(fields: Record<string, string>): Record<string, boolean> {
  const errors: Record<string, boolean> = {};
  for (const [fieldName, value] of Object.entries(fields)) {
    errors[fieldName] = !validateField(fieldName, value);
  }
  return errors;
}

const validations = {
  validateField,
  getErrors,
};

export default validations;
