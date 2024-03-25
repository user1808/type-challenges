type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Acc extends unknown[] = [],
  ShouldFill extends boolean = false
> = T extends [infer Head, ...infer Tail]
  ? Start extends End 
    ? Fill<Tail, N, Start, End, [...Acc, Head], ShouldFill>
    : Acc['length'] extends Start
      ? Fill<Tail, N, Start, End, [...Acc, N], true>
      : Acc['length'] extends End
        ? Fill<Tail, N, Start, End, [...Acc, Head], false>
        : Fill<Tail, N, Start, End, ShouldFill extends true ? [...Acc, N] : [...Acc, Head], ShouldFill>
  : Acc
