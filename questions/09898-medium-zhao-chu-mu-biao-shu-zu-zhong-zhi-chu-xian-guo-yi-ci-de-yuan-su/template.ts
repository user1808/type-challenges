type FindEles<T extends unknown[], VisitedElements extends unknown[] = [], Acc extends unknown[] = []> = 
  T extends [infer Head, ...infer Tail]
    ? FindEles<
      Tail,
      [...VisitedElements, Head], 
      Head extends Tail[number] | VisitedElements[number] ? Acc : [...Acc, Head]
    >
    : Acc
