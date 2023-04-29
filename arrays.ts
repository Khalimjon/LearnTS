// exercise-1

// const fruits: string[] =['banana', 'apple', 'cherry', 'mango', 'orange', 'kiwi'];
//
// fruits[0] = 'bananjon';
// fruits[1] = 'olmajon';
//
// fruits.unshift('qanaqadurMeva')
//
// console.log(fruits)

//exercise-2

// const myString: string = 'Hello+my+name+is+Khalimjon'
//
// const myArray: string[] = myString.split('+');
//
// const arrLength: number = myArray.length;
//
// const last: string = myArray[arrLength - 1]

// console.log(myArray);
// console.log(arrLength);
// console.log(last)

// exercise 3
//
// const names: string[] = ['Nick', 'Mosh', 'Josh', 'Ann'];
//
// names.pop();
// names.push('Asadullo', 'KhalimTogo');
//
// for( let i = 0; i < names.length; i++ ) {
//     names[i] = names[i] + "("+ i +")"
// }
//
//
// console.log(names)

// exercise 4

const birds: string[] = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

const index: number = birds.indexOf('Eagles')
birds.splice(index, 1)

let eBirds: string[] = birds.filter(bird => bird.startsWith('E')) ;


console.log(birds)
console.log(index)

console.log(eBirds)