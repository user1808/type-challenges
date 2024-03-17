type Subsequence<T extends any[]> = 
  T extends [infer Head, ...infer Tail]
    ? Subsequence<Tail> | [Head, ...Subsequence<Tail>]
    : []
