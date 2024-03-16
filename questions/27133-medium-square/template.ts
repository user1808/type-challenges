type Square<
  N extends number,
  StepAcc extends unknown[] = [], 
  StepsCount extends unknown[] = [], 
  Acc extends unknown[] = [],
  AddZeros extends string = '',
> = 
  `${N}` extends `-${infer R1 extends number}` 
    ? Square<R1, [], [], [], AddZeros>
    : `${N}` extends `${infer R2 extends number}0`
      ? Square<R2, [], [], [], `${AddZeros}00`>
      : StepsCount['length'] extends N
        ? `${Acc['length']}${AddZeros}` extends `${infer R3 extends number}` 
          ? R3 // <--- result
          : never 
        : StepAcc['length'] extends N
          ? Square<N, [], [unknown, ...StepsCount], [...Acc, ...StepAcc], AddZeros>
          : Square<N, [unknown, ...StepAcc], StepsCount, Acc, AddZeros>
