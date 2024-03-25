type Filter<T extends any[], P, Acc extends unknown[] = []> = T extends [infer Head, ...infer Tail]
  ? Filter<Tail, P, Head extends P ? [...Acc, Head] : Acc>
  : Acc;
