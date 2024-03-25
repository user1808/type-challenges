
type LastIndexOf<T extends unknown[], U> = T extends [...infer Head, infer Tail]
  ? Equal<U, Tail> extends true
    ? Head['length']
    : LastIndexOf<Head, U>
  : -1
