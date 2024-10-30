export type Nullable<T> = T | null;

export type IsNull<T> = null extends T ? true : false;
export type IsNullable<T> = null extends T ? true : false;
export type IsUndefined<T> = undefined extends T ? true : false;
export type IsUnknown<T> = unknown extends T ? true : false;
export type IsUnknownOrUndefined<T> =
  IsUnknown<T> extends true ? true : IsUndefined<T> extends true ? true : false;
export type IsVoid<T> =
  IsUndefined<T> extends true ? true : IsNull<T> extends true ? true : false;

export type ExtendsUndefined<T> = T extends undefined ? true : false;
export type ExtendsNull<T> = T extends null ? true : false;
export type ExtendsVoid<T> =
  ExtendsUndefined<T> extends true
    ? true
    : ExtendsNull<T> extends true
      ? true
      : false;
export type ExtendsUnknown<T> = T extends unknown ? true : false;
export type ExtendsUnknownOrUndefined<T> =
  ExtendsUnknown<T> extends true
    ? true
    : ExtendsUndefined<T> extends true
      ? true
      : false;

export type IsOptional<T> =
  IsVoid<T> extends true
    ? true
    : ExtendsUndefined<T> extends true
      ? true
      : false;
export type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2
    ? true
    : false;
/**
 * Flatten/format type output for use in editor(s)
 *
 * Based on: https://github.com/sindresorhus/type-fest/blob/main/source/simplify.d.ts
 */
export type Fmt<T> = { [KeyType in keyof T]: T[KeyType] } & {};
export type FmtDeep<T> = {
  [KeyType in keyof T]: T[KeyType] extends Record<string, unknown>
    ? FmtDeep<T[KeyType]>
    : T[KeyType] extends Array<infer U>
      ? U[]
      : T[KeyType];
};
