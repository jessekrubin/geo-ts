/**
 * "Creates" a tuple of numbers by returning the input array.
 *
 * WHY??? This is an identity function, so why do I/you/we/they/them/it need it?
 *
 * - Typescript can infer the type of the array into a tuple
 * - Bundlers (eg esbuild/webpack) can inline the function call because its an identity function
 *
 * A quick test of bundling this with esbuild shows that it DOES inline it,
 * so you/one (theoretically) gets type inference w/o an extra function call.
 *
 * @example
 * ```ts
 * const a = tuple([1, 2, 3]); // a: [number, number, number]
 * // saves you from writing
 * : const a: [number, number, number] = [1, 2, 3];
 * // or
 * : const a = [1, 2, 3] as [number, number, number];
 * ```
 *
 * @param array - An array of numbers.
 * @returns The input array.
 */
export function vec<
  T extends readonly [number | bigint, ...(number | bigint)[]],
>(array: T): T {
  return array;
}
