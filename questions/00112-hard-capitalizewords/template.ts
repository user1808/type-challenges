type CapitalizeWords<
  S extends string,
  Word extends string = ''
> = S extends `${infer Head}${infer Tail}`
  ? Uppercase<Head> extends Lowercase<Head>
    ? `${Capitalize<`${Word}${Head}`>}${CapitalizeWords<Tail>}`
    : CapitalizeWords<Tail, `${Word}${Head}`>
  : Capitalize<Word>
