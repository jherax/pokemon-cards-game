const NOT_NUMBER = /\D+|\s+/g;

function getNumber(value?: string): number {
  const number = value?.replace(NOT_NUMBER, '');
  return parseFloat(number ?? '0') || 0;
}

export default getNumber;
