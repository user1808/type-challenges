type Assign<T extends Record<string, unknown>, U extends unknown[]> =
  U extends [infer Head extends Record<string, unknown>, ...infer Tail extends Record<string, unknown>[]]
    ? Assign<
      { [K in keyof T | keyof Head]: K extends keyof Head ? Head[K] : K extends keyof T ? T[K] : never },
      Tail
    >
    : T
