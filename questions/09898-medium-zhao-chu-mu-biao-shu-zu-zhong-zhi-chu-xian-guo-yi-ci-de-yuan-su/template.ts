type A = FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 1]>;

type FindEles<T extends unknown[], VisitedElements extends unknown[] = [], Acc extends unknown[] = []> = 
  T extends [infer Head, ...infer Tail]
    ? FindEles<
      Tail,
      [...VisitedElements, Head], 
      Head extends Tail[number] | VisitedElements[number] ? Acc : [...Acc, Head]
    >
    : Acc
