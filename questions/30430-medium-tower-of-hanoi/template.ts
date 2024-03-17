type HanoiHelper<N extends number, Acc extends unknown[] = []> = 
  Acc['length'] extends N
    ? Acc extends [infer _, ...infer Tail] ? Tail['length'] : 0
    : HanoiHelper<N, [N, ...Acc]>;

type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C'> = 
  N extends 0
    ? []
    : [
        ...Hanoi<HanoiHelper<N>, From, Intermediate, To>,
        [From, To],
        ...Hanoi<HanoiHelper<N>, Intermediate, To, From>,
      ];
