type CheckChar<S extends string, C extends string, Count extends unknown[] = []> = 
  S extends `${infer Head}${infer Tail}`
    ? Head extends C
      ? Count['length'] extends 2 ? 2 : CheckChar<Tail, C, [unknown, ...Count]>
      : CheckChar<Tail, C, Count>
    : Count['length']

type FirstUniqueCharIndex<T extends string, Tail = T, Index extends unknown[] = []> = 
  Tail extends `${infer Head}${infer Tail}`
    ? CheckChar<T, Head> extends 1
      ? Index['length']
      : FirstUniqueCharIndex<T, Tail, [unknown, ...Index]>
    : -1
