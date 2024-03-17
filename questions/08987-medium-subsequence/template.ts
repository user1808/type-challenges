type Test = Subsequence<[1, 2]>;

type Subsequence<T extends any[]> = 
  T extends [infer Head, ...infer Tail]
    ? Subsequence<Tail> | [Head, ...Subsequence<Tail>]
    : []
