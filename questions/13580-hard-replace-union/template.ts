type UnionReplace<T, U extends [any, any][]> = T extends any
  ? U extends [infer Head extends [any, any], ...infer Tail extends [any, any][]]
    ? Equal<T, Head[0]> extends true
      ? Head[1]
      : UnionReplace<T, Tail>
    : T
  : never;
