type Shift<T extends unknown[]> = T extends [unknown, ...infer B] ? B : [];
