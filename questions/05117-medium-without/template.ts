type Without<T extends unknown[], U extends unknown[] | unknown, Acc extends unknown[] = []> = 
  T extends [infer Head, ...infer Tail]
    ? Head extends (U extends unknown[] ? U[number] : U)
      ? Without<Tail, U, Acc>
      : Without<Tail, U, [...Acc, Head]>
    : Acc
