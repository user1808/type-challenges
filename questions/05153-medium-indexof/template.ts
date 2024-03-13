type IndexOf<T extends unknown[], U, Acc extends unknown[] = []> = T extends [infer Head, ...infer Tail]
  ? Equal<U, Head> extends true
    ? Acc['length']
    : IndexOf<Tail, U, [unknown, ...Acc]>
  : -1
