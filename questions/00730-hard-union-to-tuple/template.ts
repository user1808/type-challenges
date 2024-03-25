type LastInUnion<U> = UnionToIntersection<
  U extends unknown ? (x: U) => 0 : never
> extends (x: infer L) => 0
  ? L
  : never;

type UnionToTuple<T, LastInT = LastInUnion<T>> = [T] extends [never]
  ? []
  : [LastInT, ...UnionToTuple<Exclude<T, LastInT>>];
