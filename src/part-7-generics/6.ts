class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        this.data = data;
        this.error = error;
    }
}

const respOne = new Resp<string, number>('test', 5);
const respTwo = new Resp<number, string>(5, 'test');

class HttpResp<F> extends Resp<[], string> {
    code?: F;

    setCode(code: F) {
        this.code = code;
    }
}