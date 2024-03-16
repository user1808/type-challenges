type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [infer Head, ...infer Tail]
  ? Head extends S
    ? [R, ...Tail]
    : [Head, ...ReplaceFirst<Tail, S, R>]
  : []
