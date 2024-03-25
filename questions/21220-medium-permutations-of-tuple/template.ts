// Not my solution
type PermutationsOfTuple<T extends unknown[], Prev extends unknown[] = []> = T extends [infer First, ...infer Rest]
  ? [First, ...PermutationsOfTuple<[...Prev, ...Rest]>] | (Rest extends [] ? never : PermutationsOfTuple<Rest, [...Prev, First]>)
  : []
