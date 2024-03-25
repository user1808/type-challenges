type MyOmit<T, K extends keyof T> = {
  [Key in Exclude<keyof T, K>]: T[Key];
}
