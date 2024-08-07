/**
 * Generates a random integer between min and max.
 *
 * @param min minimum value (inclusive)
 * @param max maximum value (inclusive)
 * @returns A random number generated
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (1 + max - min)) + min;
}

/**
 * Generates an array of unique random numbers.
 * @example
 * ```ts
 * randomNumbers(10, 1, 99);
 * ```
 * @param count How many numbers will be generated
 * @param min minimum value (inclusive)
 * @param max maximum value (inclusive)
 * @returns An array of random numbers
 */
export function randomNumbers(
  count: number,
  min: number,
  max: number,
): number[] {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    numbers.add(randomInt(min, max));
  }
  return Array.from(numbers);
}
