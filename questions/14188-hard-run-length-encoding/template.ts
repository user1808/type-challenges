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

  export type Decode<S extends string> = any;
}
