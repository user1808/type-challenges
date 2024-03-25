type FindMinMaxInArray<
  T extends number[],  
  SearchForMax extends boolean,
  Acc extends number | never = never,
> = T extends [infer Head extends number, ...infer Tail extends number[]]
  ? [Acc] extends [never]
    ? FindMinMaxInArray<Tail, SearchForMax, Head>
    : Comparator<Head, Acc> extends (SearchForMax extends true ? Comparison.Greater : Comparison.Lower)
      ? FindMinMaxInArray<Tail, SearchForMax, Head>
      : FindMinMaxInArray<Tail, SearchForMax, Acc>
  : Acc;

type Sort<
  T extends number[],
  DescOrder extends boolean = false,
  TLength extends number = T['length'],
  TWithoutCurrentNumber extends number[] = [],
  CurrentNumber extends number = FindMinMaxInArray<T, DescOrder>,
  SortedT extends number[] = [],
> = SortedT['length'] extends TLength
  ? SortedT
  : T extends [infer Head extends number, ...infer Tail extends number[]]
    ? Head extends CurrentNumber
      ? Sort<Tail, DescOrder, TLength, TWithoutCurrentNumber, CurrentNumber, [...SortedT, Head]>
      : Sort<Tail, DescOrder, TLength, [...TWithoutCurrentNumber, Head], CurrentNumber, SortedT>
    : Sort<TWithoutCurrentNumber, DescOrder, TLength, [], FindMinMaxInArray<TWithoutCurrentNumber, DescOrder>, SortedT>;
