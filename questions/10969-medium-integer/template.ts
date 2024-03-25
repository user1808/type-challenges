type Integer<T extends number> = `${T}` extends `${any}.${any}`
  ? never
  : number extends T ? never : T;
