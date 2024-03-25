type CreateArrayOfLength<N extends number, Acc extends unknown[] = []> = Acc['length'] extends N
  ? Acc
  : CreateArrayOfLength<N, [unknown, ...Acc]>;
  
type TwoSumHelper<T extends number[], N = Subsequence<T>> = N extends number[]
? N['length'] extends 2
  ? [...CreateArrayOfLength<N[0]>, ...CreateArrayOfLength<N[1]>]['length']
  : never
: never;

type TwoSum<T extends number[], U extends number> = U extends TwoSumHelper<T> ? true : false;
