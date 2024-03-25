type ReplaceKeys<U extends object, T extends keyof any, Y extends object> = U extends object
  ? { [K in keyof U]: K extends T ? K extends keyof Y ? Y[K] : never : U[K] }
  : never;
