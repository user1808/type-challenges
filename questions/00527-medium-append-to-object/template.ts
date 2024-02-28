type AppendToObject<T extends {}, K extends keyof any, V> = {
  [Key in keyof T | K]: Key extends keyof T ? T[Key] : V;
};
