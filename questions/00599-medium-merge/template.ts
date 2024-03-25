type Merge<F extends {}, S extends {}> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
}
