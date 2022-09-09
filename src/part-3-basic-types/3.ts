(() => {
    const skills: string[] = ['javascript', 'typescript', 'nodejs'];

// for(const skill of skills) {
//     console.log(skill);
// }

// for(let i = 0; i <= skills.length; i++) {
//     console.log(skills[i]);
// }

// skills.forEach( (value, index, array) => {
//     console.log(value, index, array[index+1]);
// });

// let flag = true;
// let counter = 0;
// while (flag) {
//     if (counter < 10) {
//         console.log('Test');
//         counter++;
//     } else {
//         flag = false;
//     }   
// }

// let counter = 0;
// do {
//     console.log('Test');
//     counter++;
// } while (counter < 10);

// type Test = string | null;
// const where: [Test, ...number[]] = [null, 1, 2, 3, 4];

// var cat = {name: 'test'};

// function swap(feline: any) {
//     feline.name = 'test1';
//     feline = {name: 'test3'};
// }

// swap(cat);
// console.log(cat.name);

// class Animal {
//     static belly:string[] = [];
//     eat() { Animal.belly.push('food')};
// }

// const animal = new Animal();
// animal.eat();

// console.log(Animal.belly[0]);

// const test1: number[] = [1, 2, 3, 4];
// console.log(test1.slice(0, 2));

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0)

// console.log(3);

// const animal = [1, 2];
// animal.reverse();
// console.log(animal.pop());

// let v = 1;

// const fun1 = () => {
//     console.log(v);
// }

// const fun2 = () => {
//     let v = 2;
//     fun1();
// }

// fun2();

// const sound = 'grunt';

// const bear = { sound: 'roar'};

// function roar() {
//     console.log(this.sound);    
// }

const animals = ['test', 'test2']

const key = (animal: string) => animal === 'test2';

console.log(animals.some(key));

})();