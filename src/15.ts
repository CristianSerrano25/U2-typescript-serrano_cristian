function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Juancito"));
console.log(identity<number>(567));
console.log(identity<boolean>(true));