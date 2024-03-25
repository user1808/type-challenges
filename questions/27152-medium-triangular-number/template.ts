type Triangular<N extends number, PreviousStep extends unknown[] = [], Acc extends unknown[] = []> =
  PreviousStep['length'] extends N
    ? Acc['length']
    : Triangular<N, [unknown, ...PreviousStep], [unknown, ...Acc, ...PreviousStep]>;
