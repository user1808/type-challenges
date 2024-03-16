// 实现 Combs
type Combs<T extends string[]> = T extends [infer Head extends string, ...infer Tail extends string[]]
  ? Combs<Tail> | (Tail[number] extends any ? 
      `${Head} ${Tail[number]}` 
      : never)
  : never