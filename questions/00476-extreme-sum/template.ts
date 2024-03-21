type SumDigits<
  A1 extends number, 
  A2 extends number,
  Acc extends unknown[][] = [[], []]
> = Acc[0]['length'] extends A1
  ? Acc[1]['length'] extends A2
    ? [...Acc[0], ...Acc[1]]['length']
    : SumDigits<A1, A2, [Acc[0], [unknown, ...Acc[1]]]>
  : SumDigits<A1, A2, [[unknown, ...Acc[0]], Acc[1]]>;

type SumHelper<A extends string, B extends string, Rest extends number = 0> = 
  A extends `${infer HeadA extends number}${infer TailA}`
    ? B extends `${infer HeadB extends number}${infer TailB}`
      ? `${SumDigits<SumDigits<HeadA, HeadB>, Rest>}` extends `${infer SumRest extends number}${infer Result extends number}`
        ? `${Result}${SumHelper<TailA, TailB, SumRest>}`
        : `${SumDigits<SumDigits<HeadA, HeadB>, Rest>}${SumHelper<TailA, TailB, 0>}`
      : Rest extends 0 ? A : SumHelper<A, '0', Rest>
    : Rest extends 0 ? B : SumHelper<B, '0', Rest>;

type Sum<A extends string | number | bigint, B extends string | number | bigint> = 
  ReverseString<SumHelper<ReverseString<`${A}`>, ReverseString<`${B}`>>>;
