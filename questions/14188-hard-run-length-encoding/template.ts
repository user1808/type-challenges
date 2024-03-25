namespace RLE {
  export type Encode<
    S extends string, 
    LastChar extends string = string,
    SameCharCount extends unknown[] = [],
    SameCharCountLength extends number = SameCharCount['length']
  > = S extends `${infer Head}${infer Tail}`
    ? Head extends LastChar
      ? Encode<Tail, Head, [...SameCharCount, unknown]>
      : `${SameCharCountLength extends 1 | 0 ? '' : SameCharCountLength}${LastChar}${Encode<Tail, Head, [unknown]>}`
    : `${SameCharCountLength extends 1 | 0 ? '' : SameCharCountLength}${string extends LastChar ? '' : LastChar}`;

  export type Decode<
    S extends string,
    HowMany extends number = 1,
    Count extends unknown[] = []
  > = S extends `${infer Count extends number}${infer Letter}${infer Tail}`
    ? Decode<`${Letter}${Tail}`, Count>
    : S extends `${infer Letter}${infer Tail}`
      ? Count['length'] extends HowMany
        ? Decode<Tail>
        : `${Letter}${Decode<`${Letter}${Tail}`, HowMany, [unknown, ...Count]>}`
      : '';
}
