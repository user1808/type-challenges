type DeepPickHelper<T extends object, S extends string> =  
  S extends `${infer Head}.${infer Tail}`
    ? { [K in Head]: K extends keyof T ? T[K] extends object ? DeepPickHelper<T[K], Tail> : never : never }
    : S extends keyof T
      ? Pick<T, S>
      : never;

type DeepPick<T extends object, S extends string> = UnionToIntersection<DeepPickHelper<T, S>>;
