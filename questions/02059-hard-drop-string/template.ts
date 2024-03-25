type DropString<S extends string, R extends string, RUnion = StringToUnion<R>> = S extends `${infer Head}${infer Tail}`
  ? Head extends RUnion
    ? DropString<Tail, R>
    : `${Head}${DropString<Tail, R>}`
  : '';
