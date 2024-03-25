type SnakeCase<T extends string> = 
  T extends `${infer Head extends string}${infer Tail extends string}`
    ? Capitalize<Head> extends Head
      ? `_${Uncapitalize<Head>}${SnakeCase<Tail>}`
      : `${Head}${SnakeCase<Tail>}`
    : ''
