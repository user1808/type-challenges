type A = Integer<1.1>;

type Integer<T extends number> = `${T}` extends `${any}.${any}`
  ? never
  : number extends T ? never : T;
