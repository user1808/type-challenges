type IsOddHelper<S extends string> = S extends `${infer Head}${infer Tail}`
  ? [...IsOddHelper<Tail>, Head]
  : []

type IsOdd<T extends number> = number extends T
  ? false
  : IsOddHelper<`${T}`>[0] extends '0' | '2' | '4' | '6' | '8'
    ? false
    : true;
