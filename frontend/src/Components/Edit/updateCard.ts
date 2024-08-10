/* eslint-disable curly */
import {v4 as uuidv4} from 'uuid';

import {fieldPrefix} from './getFieldNames';

const X = '×';

function updateCard(
  card: ICard,
  fields: Record<string, string>,
): Promise<ICard> {
  const {ATTACK, WEAKNESS, RESISTANCE} = fieldPrefix;

  return new Promise(resolve => {
    for (const key in fields) {
      if (key === 'hp') {
        card.hp = fields[key];
      } else if (key.startsWith(ATTACK)) {
        const attack = key.replace(ATTACK, '');
        const item = card.attacks?.find(a => a.name === attack);
        if (item) item.damage = fields[key];
      } else if (key.startsWith(WEAKNESS)) {
        const weakness = key.replace(WEAKNESS, '');
        const item = card.weaknesses?.find(w => w.type === weakness);
        if (item) item.value = fields[key].replace('x', X);
      } else if (key.startsWith(RESISTANCE)) {
        const resistance = key.replace(RESISTANCE, '');
        const item = card.resistances?.find(r => r.type === resistance);
        if (item) item.value = fields[key].replace('x', X);
      }
    }

    card.id = uuidv4();
    resolve(card);
  });
}

export default updateCard;
