type IsNegativeNumber<T extends number, K = T> = 
  T extends number
  ? [Exclude<K, T>] extends [never]
    ? number extends T
        ? never
        : `${T}` extends `-${string}`
          ? true
          : false
    : never
  : never;
