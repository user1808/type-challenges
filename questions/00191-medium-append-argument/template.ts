type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer Args) => infer Result 
  ? (...args: [...Args, A]) => Result
  : never;
