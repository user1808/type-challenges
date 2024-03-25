type Get<T extends object, K extends string> = 
  K extends keyof T
  ? T[K]
  : K extends `${infer Head}.${infer Tail}`
    ? Head extends keyof T
      ? T[Head] extends object
        ? Get<T[Head], Tail>
        : never
      : never
    : never;
