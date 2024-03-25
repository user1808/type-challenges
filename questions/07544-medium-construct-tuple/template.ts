type ConstructTuple<L extends number, Tuple extends unknown[] = []> = 
  Tuple['length'] extends L
    ? Tuple
    : ConstructTuple<L, [unknown, ...Tuple]>;
