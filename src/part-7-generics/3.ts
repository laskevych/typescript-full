/**
 * Получаем строку из любого значения.
 * @param value 
 * @returns 
 */

function toString<T>(value: T): string | undefined {
    let result = undefined;

    if(Array.isArray(value)) {
        result = value.toString();
    }

    switch (typeof value) {
        case 'string':
            result = value;
            break;
        case 'object':
            result = JSON.stringify(value);
            break;
        case 'number':
        case 'boolean':
        case 'symbol':
        case 'bigint':
        case 'function':
            result = value.toString();
            break;
    }

    return result;
}

console.log(toString(3));
console.log(toString(true));
console.log(toString({a: 1, b: 'test'}));
console.log(toString([1, 2, 3, 4, 5]));
