type PowerOfTwo<
  N extends number, 
  NCount extends unknown[] = [], 
  Acc extends unknown[] = [unknown]
> = NCount['length'] extends N
  ? Acc
  : PowerOfTwo<N, [unknown, ...NCount], [...Acc, ...Acc]>;

type BinaryToDecimalHelper<
  S extends string, 
  Count extends unknown[] = [], 
  Acc extends unknown[] = []
> = S extends `${infer Head extends '0' | '1'}${infer Tail}`
  ? BinaryToDecimalHelper<
    Tail, 
    [unknown, ...Count], 
    [...Acc, ...(Head extends '0' ? [] : PowerOfTwo<Count['length']>)]
  >
  : Acc['length'];

type BinaryToDecimal<S extends string> = BinaryToDecimalHelper<ReverseString<S>>;
