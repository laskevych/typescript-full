let strOrNum: string | number;

if (Math.random() > 0.5) {
    strOrNum = 'Five';
} else {
    strOrNum = 5;
}

if (typeof strOrNum === 'number') {
    console.log(strOrNum * 0.5);
} else {
    console.log(strOrNum.toUpperCase());
}

let strOrNum2: typeof strOrNum;

const userTest = {
    name: 'Test',
    age: 5
};

type keyOfUserTest = keyof typeof userTest;

enum Direction {
    Up,
    Down
}

type d = keyof typeof Direction;