function merge<T>(objA: T, objB: T): T {
    return {...objA, ...objB};
}