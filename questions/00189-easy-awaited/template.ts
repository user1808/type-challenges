type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer A> 
  ? A extends PromiseLike<any> 
    ? MyAwaited<A> 
    : A 
  : never;
