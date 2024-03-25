type RequiredByKeysFlat<T extends object> = {
  [K in keyof T]: T[K]
}

type RequiredByKeys<T, K extends keyof T | never = never> = [K] extends [never] 
  ? { [U in keyof T]-?: T[U] }
  : Flat<Omit<T, K> & { [U in keyof T as U extends K ? U : never]-?: T[U] }>
