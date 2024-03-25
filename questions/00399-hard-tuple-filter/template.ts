type FilterOut<T extends any[], F> = T extends [infer Head, ...infer Tail]
  ? Equal<Head, F> extends true
    ? FilterOut<Tail, F>
    : [Head] extends [F]
      ? FilterOut<Tail, F>
      : [Head, ...FilterOut<Tail, F>]
  : []
