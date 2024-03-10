// Yea, i know that T and U are suppose to be Tuples but whatever, I leave it as it is
type Zip<T extends unknown[], U extends unknown[], Acc extends unknown[] = []> = Acc['length'] extends 2
  ? Acc
  : Acc['length'] extends T['length'] | U['length']
    ? Acc
    : Zip<T, U, [...Acc, [T[Acc['length']], U[Acc['length']]]]>
