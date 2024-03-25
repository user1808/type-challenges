type ToNumber<S extends string> = S extends `${infer R extends number}`
? R
: never;
