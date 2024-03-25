type Curry2<Args, Result, D extends unknown[] = []> =
    Args extends [infer H, ...infer T]
      ? T extends []
        ? (...args: [...D, H]) => Result
        : ((...args: [...D, H]) => Curry2<T, Result>) & Curry2<T, Result, [...D, H]>
      : () => Result

declare function DynamicParamsCurrying<
  Args extends unknown[], 
  Result,
>(fn: (...args: Args) => Result): Curry2<Args, Result>;
