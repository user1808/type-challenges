type Bit = 1 | 0;

type BitNegation<T extends Bit> = T extends 1 ? 0 : 1;
type AddBits<A extends Bit, B extends Bit, Rest extends Bit = 0> = 
  A extends 0
    ? B extends 0 ? [0, Rest] : [Rest, BitNegation<Rest>]
    : B extends 0 ? [Rest, BitNegation<Rest>] : [1, Rest];

type BinaryAdd<A extends Bit[], B extends Bit[], Rest extends Bit = 0, Acc extends Bit[] = []> = 
  A extends [...infer TailA extends Bit[], infer HeadA extends Bit]
    ? B extends [...infer TailB extends Bit[], infer HeadB extends Bit]
      ? AddBits<HeadA, HeadB, Rest> extends infer Result extends [Bit, Bit]
        ? BinaryAdd<TailA, TailB, Result[0], [Result[1], ...Acc]>
        : never
      : AddBits<HeadA, 0, Rest> extends infer Result extends [Bit, Bit]
        ? BinaryAdd<TailA, [], Result[0], [Result[1], ...Acc]>
        : never
    : B extends [...infer TailB extends Bit[], infer HeadB extends Bit]
      ? AddBits<0, HeadB, Rest> extends infer Result extends [Bit, Bit]
        ? BinaryAdd<[], TailB, Result[0], [Result[1], ...Acc]>
        : never
      : Rest extends 0 ? Acc : [Rest, ...Acc];
