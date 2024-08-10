import getNumber from '../../utils/getNumber';

export const fieldPrefix = {
  ATTACK: 'attack_',
  WEAKNESS: 'weakness_',
  RESISTANCE: 'resistance_',
};

function getFieldNames(card: ICard): Record<string, string> {
  const {ATTACK, WEAKNESS, RESISTANCE} = fieldPrefix;
  const fields = Object.create(null) as Record<string, string>;
  fields['hp'] = `${getNumber(card.hp)}`;

  card.attacks?.reduce((obj, attack) => {
    obj[`${ATTACK}${attack.name}`] = `${getNumber(attack.damage)}`;
    return obj;
  }, fields);

  card.weaknesses?.reduce((obj, weakness) => {
    obj[`${WEAKNESS}${weakness.type}`] = weakness.value;
    return obj;
  }, fields);

  card.resistances?.reduce((obj, resistance) => {
    obj[`${RESISTANCE}${resistance.type}`] = resistance.value;
    return obj;
  }, fields);

  return fields;
}

export default getFieldNames;
