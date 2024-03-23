type PlusOne<T extends unknown[]> = [unknown, ...T]['length'];

type CountReversePairsComparator<A extends number, B extends number> = 
  Comparator<A, B> extends Comparison.Greater ? [unknown] : [];

type CountReversePairs<
  T extends number[], 
  Acc extends unknown[] = [], 
  I extends unknown[] = [], J extends unknown[] = [unknown, ...I]
> = PlusOne<I> extends T['length']
  ? Acc['length']
  : PlusOne<J> extends T['length']
    ? CountReversePairs<T, [...Acc, ...CountReversePairsComparator<T[I['length']], T[J['length']]>], [unknown, ...I]>
    : CountReversePairs<T, [...Acc, ...CountReversePairsComparator<T[I['length']], T[J['length']]>], I, [unknown, ...J]>;
