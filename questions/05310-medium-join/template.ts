type Join<T extends string[], U extends string | number> = T extends [infer Head extends string, ...infer Tail]
  ? `${Head}${Tail['length'] extends 0 ? '' : U}${Join<Tail extends string[] ? Tail : [], U>}`
  : '';
