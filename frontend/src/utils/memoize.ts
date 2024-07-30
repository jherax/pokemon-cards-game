/**
 * High-order function that memoizes a function, by creating a scope
 * to store the result of each function call, returning the cached
 * result when the same inputs is given.
 *
 * @description
 * Memoization is an optimization technique used primarily to speed up
 * functions by storing the results of expensive function calls, and returning
 * the cached result when the same inputs occur again.
 *
 * Each time a memoized function is called, its parameters are used as keys to index the cache.
 * If the index/key is present, then it can be returned, without executing the entire function.
 * If the index is not cached, then the original function is executed, and the result is
 * stored into the cache.
 *
 * LIMITATIONS
 *
 * As memoize is a higher-order function that accepts a function as its argument
 * and returns a memoized version of the function itself, it's perfect to work with
 * pure functions because of the Referential transparency, but it is not suitable
 * for a function that modifies itself like the Lazy function definition pattern,
 * or for memoizing recursive functions.
 *
 * @warn Do not use with arguments of type `Object` or `Array`.
 * If you need memoize a function with object arguments, then
 * serialize the arguments and use it as key.
 *
 * @param func Function to memoize
 * @returns Memoized function
 */
export function memoize<Args extends unknown[], R>(func: (...args: Args) => R) {
  const cache = new Map<string, R>();

  return function memoized(...args: Args): R {
    // For performance reasons, it is not recommended
    // memoizing functions with `Object` or `Array` arguments,
    // but if the body function is really cpu consuming, you can
    // serialize arguments, for example, using `JSON.stringify(args)`
    // or a better serializer. Map() uses identity comparison for keys
    // and, that's why we need to serialize the arguments.
    // const key = JSON.stringify(args);
    const key = `[${args}]`;
    if (cache.has(key)) {
      return cache.get(key) as R;
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}
