// 1-exercise
// @ts-ignore

// function findGreater(a: number, b: number){
//     if(a < b){
//         return b
//     }
//
//     return a
// }
//
// console.log(findGreater(12, 7))

//2-exercise

const now = new Date();

const day: number = now.getDate();
const month: number = now.getMonth() +1;
const year: number = now.getFullYear();

const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
const formattedYear: string = `${year}`;

const formattedDates: string = `${formattedDay}/${formattedMonth}/${formattedYear}`


console.log(formattedDates)

// 3-exercise


function sum(a: number, b: number){
    return a + b
}

console.log(sum(17, 200))

// 4-exercise

//
// type User = {
//     firstName: string,
//     lastName: string,
//     phone: number,
//     email: string,
//     age: number,
//     isMarried: boolean,
// }
//
// // exercise 5
//
// const user: User ={
//     firstName: 'palonchi',
//     lastName: 'palonchiyev',
//     phone: 998905833250,
//     email: 'somethin@gail.com',
//     age: 67,
//     isMarried: true
// }
//
// console.log(user)