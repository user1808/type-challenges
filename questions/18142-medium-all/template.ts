type All<T extends unknown[], U> = T extends [infer Head, ...infer Tail]
  ? Equal<Head, U> extends true
    ? All<Tail, U>
    : false
  : true;
