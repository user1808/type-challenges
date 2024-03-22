type InclusiveRange<Lower extends number, Higher extends number, Acc extends number[] = [Lower]> = 
  GreaterThan<Lower, Higher> extends true 
    ? []
    : Acc[MinusOne<Acc['length']>] extends Higher
      ? Acc
      : Sum<Acc[MinusOne<Acc['length']>], 1> extends `${infer R extends number}`
        ? InclusiveRange<Lower, Higher, [...Acc, R]>
        : never;
