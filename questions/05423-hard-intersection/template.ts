type Intersection<T extends unknown[], Result = T[0] extends unknown[] ? T[0][number] : T[0]> =
  T extends [infer Head, ...infer Tail]
    ? Intersection<Tail, Extract<Result, Head extends unknown[] ? Head[number] : Head>>
    : Result;
