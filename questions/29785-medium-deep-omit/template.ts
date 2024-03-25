type DeepOmit<T extends object, S extends string> = S extends `${infer R}.${infer Rest}`
  ? R extends keyof T
    ? T[R] extends object 
      ? { [K in keyof T]: K extends R ? DeepOmit<T[R], Rest> : T[K] }
      : never
    : never
  : S extends keyof T
    ? Omit<T, S>
    : T;
