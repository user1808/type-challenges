type XOR<S1 extends '0' | '1', S2 extends '0' | '1'> = 
  S1 extends '0'
    ? S2 extends '0' ? '0' : '1'
    : S2 extends '0' ? '1' : '0';

type BitwiseXORHelper<S1 extends string, S2 extends string> =
  S1 extends `${infer S1Head extends '0' | '1'}${infer S1Tail}`
    ? S2 extends `${infer S2Head extends '0' | '1'}${infer S2Tail}`
      ? `${XOR<S1Head, S2Head>}${BitwiseXORHelper<S1Tail, S2Tail>}`
      : S1
    : S2;

type BitwiseXOR<S1 extends string, S2 extends string> = ReverseString<
  BitwiseXORHelper<ReverseString<S1>, ReverseString<S2>>
>;
