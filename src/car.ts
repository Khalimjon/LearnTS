 interface ICar {
    printInfo(): string;
    getCarName(): string;
}

class Car implements ICar{
    name: string;
    model: string;
    year: number;
    price: number;

    constructor(name: string, model: string, year: number, price: number) {
        this.model = model;
        this.year = year;
        this.name = name;
        this.price = price;
    }
    printInfo(): string {
        return `this cars name is ${this.name}, it manufactured in ${this.year} by ${this.model} and you can buy it for ${this.price}.`
    }

    getCarName(): string {
        return `the car's name is ${this.name}`
    }
}

const car = new Car('COBALT', 'Chevrolet', 2020, 13000)
console.log(car)

console.log(car.printInfo())