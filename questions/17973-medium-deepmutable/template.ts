type DeepMutable<T extends object | readonly unknown[]> = {
  -readonly [K in keyof T]: 
    T[K] extends Record<keyof any, unknown> | readonly unknown[]
      ? DeepMutable<T[K]> 
      : T[K] 
};
