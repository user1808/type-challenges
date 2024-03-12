type Space = ' ' | '\t' | '\n';

type TrimRight<S extends string> = S extends `${infer T}${Space}` ? TrimRight<T> : S;
