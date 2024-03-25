type Maximum<T extends number[], Max extends number | never = never> = 
  T extends [infer Head extends number, ...infer Tail extends number[]] 
  ? Maximum<Tail, [Max] extends [never] ? Head : GreaterThan<Max, Head> extends true ? Max : Head>
  : Max;
