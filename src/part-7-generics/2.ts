// Bad function
// function logMiddleware(data: number | string): number | string {
//     console.log(data);
//     return data;
// }

// logMiddleware(10);


// Basic generic
function logMiddleware<T>(data: T): T {
    console.log(data);
    return data;
}

const resString = logMiddleware<string>('10');
const resNumber = logMiddleware<number>(10);
const resArray = logMiddleware<String[]>(['test']);
const resTest = logMiddleware<undefined>(undefined);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

getSplitedHalf<string>(['test', 'test2', 'test3']);
getSplitedHalf<number>([1, 2 ,3]);
getSplitedHalf<Object>([]);