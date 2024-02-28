type Permutation<T, K = T> = [T] extends [never] 
  ? [] 
  : T extends infer Head 
    ? [Head, ...Permutation<Exclude<K, Head>>] 
    : never;
