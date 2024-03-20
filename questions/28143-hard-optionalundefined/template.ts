type OptionalUndefinedMerge<
  Original extends object, 
  WithOptional extends object, 
  Together = WithOptional & Omit<Original, keyof WithOptional>
> = { [K in keyof Together] : Together[K] };

type OptionalUndefined<T extends object, Props extends string = string> = OptionalUndefinedMerge<T, {
  [K in keyof T as K extends Props ? undefined extends T[K] ? K : never : never]?: T[K];
}>;
