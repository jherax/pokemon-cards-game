/**
 * @see https://www.w3.org/TR/uievents-key/#keys-navigation
 */
export const specialKeys = ['-', '+', 'x', '×'];

export const allowedKeys = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'Backspace',
  'Delete',
  'Enter',
  'End',
  'Home',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ...specialKeys,
];

export function isValidKey(key: string): boolean {
  return allowedKeys.includes(key);
}

export function isSpecialKey(key: string): boolean {
  return specialKeys.includes(key);
}
