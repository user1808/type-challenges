type CurryingHelper<T extends unknown[], Result> = 
  T extends [any, ...infer Tail]
    ? T extends [...infer Head, ...Tail]
      ? (...args: Head) => CurryingHelper<Tail, Result>
      : never
    : Result;

declare function Currying<T>(fn: T): 
  T extends (...args: infer R) => infer S
  ? R extends [] ? () => S : CurryingHelper<R, S>
  : never;
