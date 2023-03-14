type Car = {
    name: string;
    brand: string;
    year: number;
    color: string;
    price: number;
};
declare const cars: Car[];
declare function sortingByYear(cars: Car[]): Car[];
