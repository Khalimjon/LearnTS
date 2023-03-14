// type Car = {
//     name: string;
//     brand: string;
//     year: number;
//     color: string;
//     price: number;
// };
//
// const cars: Car[] =[
//     {
//         name: 'Matiz',
//         brand: 'Daewoo',
//         year: 2004,
//         color: 'white',
//         price: 3000
//     },
//     {
//         name: 'Gentra',
//         brand: 'Chevrolet',
//         year: 2022,
//         color: 'white',
//         price: 17000
//     },
//     {
//         name: 'Malibu',
//         brand: 'Chevrolet',
//         year: 2023,
//         color: 'Black',
//         price: 37000
//     },
//     {
//         name: 'Cobalt',
//         brand: 'GM',
//         year: 2019,
//         color: 'Blue',
//         price: 13000
//     }
//
// ];
//
// function sortingByYear(cars: Car[]){
//     return cars.sort((a, b) => b.year - a.year )
// }
//
// console.log(sortingByYear(cars))
// interface IPerson {
//     printAge(): void;
//     getName(): string;
//
//     getPersonInfo(): void
// }
//
// class Person implements IPerson {
//
//   protected name: string;
//   protected age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     printAge() {
//         console.log(this.age)
//     }
//
//     getName(): string {
//         return this.name;
//     }
//
//     getPersonInfo() {
//         console.log('Info')
//     }
//
//     printSomething() {
//
//     }
// }
//
// class Male extends Person {
//
//     private readonly isMarried: boolean;
//     constructor(name: string, age: number, isMarried: boolean) {
//         super(name, age);
//         this.isMarried = isMarried;
//     }
//
//     private checkIsMarried(): boolean {
//         return this.isMarried;
//     }
//
//     getInfo() {
//         console.log(`${this.name } is ${this.age} years old and his status ${this.checkIsMarried()}`)
//     }
// }
//
// const person = new Person('Asadullo', 23);
// console.log(person);
//
//  const male = new Male('Halimjon', 18, false);
// male.getInfo()
//
//
