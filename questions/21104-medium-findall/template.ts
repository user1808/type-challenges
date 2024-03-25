type StringLength<S extends string, AddToResult extends unknown[] = [], Acc extends unknown[] = []> = S extends `${string}${infer Tail}`
  ? StringLength<Tail, AddToResult, [unknown, ...Acc]>
  : [...Acc, ...AddToResult]

type FindAll<T extends string, P extends string, PreResult extends unknown[] = []> = 
  P extends '' 
    ? []
    : T extends `${infer Pre}${P}${infer Tail}`
      ? [
          StringLength<Pre, PreResult>['length'], 
          ...FindAll<
            P extends `${string}${infer PTail}` 
              ? `${PTail}${Tail}` 
              : Tail,
            P,
            [unknown, ...StringLength<Pre, PreResult>]
          >,
        ]
      : [];
