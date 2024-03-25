type IsRequiredKey<T extends object, K extends keyof T> = [K] extends [RequiredKeys<T>] ? true : false;
