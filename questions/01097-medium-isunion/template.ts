type IsUnion<T, K = T> = [T] extends [never] 
? false 
: T extends infer R 
  ? Exclude<K, R> extends never 
    ? false 
    : true 
  : never; 
