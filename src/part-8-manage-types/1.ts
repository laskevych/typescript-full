interface IUser {
    name: string;
    age: number;
}

type KeyOfIUser = keyof IUser;

const keyUser: KeyOfIUser = 'age';

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user: IUser = {
    name: 'Andrew',
    age: 28
}

console.log(getValue(user, 'name'));

