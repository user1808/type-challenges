type CamelizeArray<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? [
      Head extends unknown[] 
        ? CamelizeArray<Head>
        : Head extends object
          ? Camelize<Head>
          : Head,
      ...CamelizeArray<Tail>,
    ]
  : []

type Camelize<T extends object> = {
  [K in keyof T as CamelCase<K & string>]: 
    T[K] extends unknown[] 
      ? CamelizeArray<T[K]> 
      : T[K] extends object
        ? Camelize<T[K]>
        : T[K];
}
