type DistributeUnions<T> = T extends unknown[] 
  ? DistributeArray<T>
  : T extends object 
    ? Flat<DistributeObject<T>>
    : T;

type DistributeArray<A extends unknown[]> = A extends [infer Head, ...infer Tail]
  ? DistributeArrayHelper<DistributeUnions<Head>, Tail>
  : [];
type DistributeArrayHelper<Head, Tail extends unknown[]> = Head extends Head
  ? [Head, ...DistributeArray<Tail>] 
  : never

type DistributeObject<O extends object, K extends keyof O = keyof O> = [K] extends [never] 
  ? {}
  : K extends K 
    ? ObjHelper<K, DistributeUnions<O[K]>> & DistributeObject<Omit<O, K>>
    : never
type ObjHelper<K, V> = V extends V ? { [k in K & string]: V } : never
