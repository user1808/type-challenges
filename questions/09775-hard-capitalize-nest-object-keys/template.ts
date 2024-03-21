type CapitalizeNestArrayKeys<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? [
      Head extends unknown[] 
        ? CapitalizeNestArrayKeys<Head> 
        : Head extends object 
          ? CapitalizeNestObjectKeys<Head> 
          : Head, ...CapitalizeNestArrayKeys<Tail>
    ]
  : []

type CapitalizeNestObjectKeys<T extends object> = {
  [K in keyof T as K extends string ? Capitalize<K> : never]: 
    T[K] extends unknown[] 
      ? CapitalizeNestArrayKeys<T[K]>
      : T[K] extends object
        ? CapitalizeNestObjectKeys<T[K]>
        : T[K];
}
