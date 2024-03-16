type MergeAll<XS extends object[], Acc extends object = {}> = 
  XS extends [infer Head extends object, ...infer Tail extends object[]]
    ? MergeAll<Tail, {
      [K in keyof Acc | keyof Head]: K extends keyof Head
        ? K extends keyof Acc
          ? Acc[K] | Head[K]
          : Head[K]
        : K extends keyof Acc ? Acc[K] : never
    }>
    : Acc
