type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string> = S extends `${infer Head}${infer Tail}`
  ? Head extends '%'
    ? Tail extends `${infer TailHead}${infer TailTail}`
      ? TailHead extends keyof ControlsMap
        ? [ControlsMap[TailHead], ...ParsePrintFormat<TailTail>]
        : ParsePrintFormat<TailTail>
      : []
    : ParsePrintFormat<Tail>
  : []
