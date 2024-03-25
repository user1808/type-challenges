type Pop<T extends any[]> = T extends [...infer Head, any] ? Head : [];
