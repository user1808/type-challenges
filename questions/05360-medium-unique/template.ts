type Unique<T extends unknown[], Acc extends unknown[] = []> = T extends [infer Head, ...infer Tail]
  ? IndexOf<Acc, Head> extends -1
    ? Unique<Tail, [...Acc, Head]>
    : Unique<Tail, Acc>
  : Acc
