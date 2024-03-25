type ExtractToObject<T extends object, U extends keyof T> = {
  [K in Exclude<keyof T, U> | keyof T[U]]: K extends keyof T[U] 
    ? T[U][K] 
    : K extends keyof T 
      ? T[K]
      : never;
}
