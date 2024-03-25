type FlipArgumentsReverse<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? [...FlipArgumentsReverse<Tail>, Head]
  : []

type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer R
  ? (...args: FlipArgumentsReverse<P>) => R
  : never;
