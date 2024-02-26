type MyPick<T, K extends keyof T> = {
  [Property in K]: T[Property];
}
