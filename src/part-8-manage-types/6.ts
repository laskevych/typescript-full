(() => {
    function runTransaction(transaction: {
        fromTo: [string, string]
    }) {
        console.log(transaction);
    }

    const transaction: GetFirstArg<typeof runTransaction> = {
        fromTo: ['Test1', 'Test3']
    }

    runTransaction(transaction);

    type GetFirstArg<T> = T extends (first: infer First, ...arg: any[]) => any ? First : never;
})();