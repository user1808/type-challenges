type Path<T extends object, K = keyof T> = K extends keyof T
  ? [K] | [ K, ...(T[K] extends object ? Path<T[K]> : never)]
  : never
