type DeepReadonly<T extends {}> = T extends Function ? T : {
  readonly [K in keyof T]: T[K] extends {} ? DeepReadonly<T[K]> : T[K]
}
