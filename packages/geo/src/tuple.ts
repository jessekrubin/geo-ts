/**
 * Creates a typed tuple
 */
export function tuple<T extends unknown[]>(...args: T): T {
  return args;
}
