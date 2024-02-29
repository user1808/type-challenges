type OmitByType<T extends object, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K]
}
