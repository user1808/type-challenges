type PercentageParser<A extends string, Acc extends string[] = ['', '', '']> = A extends `${infer Head}${infer Tail}`
  ? Head extends '+' | '-'
    ? PercentageParser<Tail, [Head, Acc[1], Acc[2]]>
    : Head extends '%'
      ? PercentageParser<Tail, [Acc[0], Acc[1], Head]>
      : Head extends `${number}`
        ? PercentageParser<Tail, [Acc[0], `${Acc[1]}${Head}`, Acc[2]]>
        : PercentageParser<Tail, Acc>
  : Acc;
