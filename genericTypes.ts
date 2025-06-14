export type Extendable<T> = string | T;
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type SecureEntity<T> = Omit<T, "password">;
export type EntityWithoutTimestamps<T> = Omit<
  T,
  "createdAt" | "updatedAt" | "deletedAt"
>;
export type EntityWithoutId<T> = Omit<T, "_id">;

export type XOR<T, U> = T | U extends object
  ?
      | (T & Partial<Record<keyof U, never>>)
      | (U & Partial<Record<keyof T, never>>)
  : T | U;

export type Filter<T> = {
  [K in keyof T]?: T[K] extends number | Date
    ? { min?: T[K]; max?: T[K] }
    : T[K] extends Array<infer U>
    ? { elements: Filter<U> }
    : T[K] extends object | undefined
    ? Filter<T[K]>
    : T[K] extends Extendable<any>
    ? string
    : T[K];
};

export type NotExtended<T> = {
  [K in keyof T]: T[K] extends Extendable<infer U> ? string : T[K];
};

export type FieldsPop<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? FieldsPop<U> | true
    : T[K] extends Extendable<infer U>
    ? FieldsPop<U> | true
    : true;
};

export interface ValueRange<T> {
  from: T;
  to: T;
}

export type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K> & Partial<Omit<T, K>>;
}[keyof T];

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

// Figuring out paths of nested objects
type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

export type KeyPaths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]: K extends string | number
        ? `${K}` | Join<K, KeyPaths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : "";
// Figuring out paths of nested objects
