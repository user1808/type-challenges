type Flatten<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? Head extends unknown[] 
    ? [...Flatten<Head>, ...Flatten<Tail>] 
    : [Head, ...Flatten<Tail>]
  : [];
