type Unbox<T, Level extends number = 0, Count extends unknown[] = []> = 
  Level extends 0
    ? Unbox<T, -1>
    : Count['length'] extends Level
    ? T
    : T extends (...args: any[]) => infer R
      ? Unbox<R, Level, [unknown, ...Count]>
      : T extends (infer R)[]
        ? Unbox<R, Level, [unknown, ...Count]>
        : T extends PromiseLike<infer R>
          ? Unbox<R, Level, [unknown, ...Count]>
          : T;
