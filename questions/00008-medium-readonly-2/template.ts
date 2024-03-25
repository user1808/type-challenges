type MyReadonly2<T, K extends keyof T | never = never> = [K] extends [never] 
  ? Readonly<T> 
  : Readonly<Pick<T, K>> & Omit<T, K>;
