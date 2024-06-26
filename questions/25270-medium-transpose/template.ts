type Transpose<
  M extends number[][], 
  NextM extends number[][] = [], 
  RowAcc extends number[] = [], 
  NewMAcc extends number[][] = []
> = 
  M extends [infer Row extends number[], ...infer RestRows extends number[][]]
    ? Row extends [infer RowHead extends number, ...infer RowTail extends number[]]
      ? Transpose<RestRows, [...NextM, RowTail], [...RowAcc, RowHead], NewMAcc>
      : NewMAcc
    : NextM extends [] 
      ? NewMAcc 
      : Transpose<NextM, [], [], [...NewMAcc, RowAcc]>;
