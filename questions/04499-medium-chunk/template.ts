type Chunk<T extends unknown[], U extends number, Acc extends unknown[] = [], AccPart extends unknown[] = []> = 
  T extends [infer Head, ...infer Tail]
    ? AccPart['length'] extends U
      ? Chunk<Tail, U, [...Acc, AccPart], [Head]>
      : Chunk<Tail, U, Acc, [...AccPart, Head]>
    : AccPart['length'] extends 0 
      ? Acc 
      : [...Acc, AccPart];
