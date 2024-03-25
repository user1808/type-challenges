type MultiplyReverseString<S extends string> = S extends `${infer Head}${infer Tail}` 
  ? `${ReverseString<Tail>}${Head}`
  : '';

type MultiplyDigits<
  A1 extends number, 
  A2 extends number,
  MultiplyCounter extends unknown[] = [],
  Acc extends unknown[][] = [[], []]
> = MultiplyCounter['length'] extends A1
  ? Acc[0]['length']
  : Acc[1]['length'] extends A2
    ? MultiplyDigits<A1, A2, [unknown, ...MultiplyCounter], [[...Acc[0], ...Acc[1]], []]>
    : MultiplyDigits<A1, A2, MultiplyCounter, [Acc[0], [unknown, ...Acc[1]]]>;

type CreateMultiplyComponent<A extends string, B extends number, Rest extends number = 0> = 
  A extends `${infer Head extends number}${infer Tail}`
    ? `${Sum<MultiplyDigits<B, Head>, Rest>}` extends `${infer SumRest extends number}${infer Result extends number}`
      ? `${Result}${CreateMultiplyComponent<Tail, B, SumRest>}`
      : `${Sum<MultiplyDigits<B, Head>, Rest>}${CreateMultiplyComponent<Tail, B, 0>}`
    : Rest extends 0 ? '' : `${Rest}`;

type IsAOrBZero<A extends string, B extends string> = '0' extends A | B ? true : false;

type MultiplyHelper<
  A extends string, 
  B extends string, 
  Zeros extends string = ''
> = B extends `${infer Head extends number}${infer Tail}`
  ? Sum<
      ReverseString<`${Zeros}${CreateMultiplyComponent<A, Head>}`>,
      MultiplyHelper<A, Tail, `${Zeros}0`>
    >
  : 0;


type Multiply<A extends string | number | bigint, B extends string | number | bigint> =
  IsAOrBZero<`${A}`, `${B}`> extends true 
    ? '0'
    : MultiplyHelper<MultiplyReverseString<`${A}`>, MultiplyReverseString<`${B}`>>;
