type CheckRepeatedTuple<T extends unknown[], Pre extends unknown[] = []> = 
  T extends [infer Head, ...infer Tail]
    ? Head extends Tail[number]
      ? true
      : CheckRepeatedTuple<Tail, [...Pre, Head]>
    : false
