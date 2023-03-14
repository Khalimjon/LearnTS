const cars = [
    {
        name: 'Matiz',
        brand: 'Daewoo',
        year: 2004,
        color: 'white',
        price: 3000
    },
    {
        name: 'Gentra',
        brand: 'Chevrolet',
        year: 2022,
        color: 'white',
        price: 17000
    },
    {
        name: 'Malibu',
        brand: 'Chevrolet',
        year: 2023,
        color: 'Black',
        price: 37000
    },
    {
        name: 'Cobalt',
        brand: 'GM',
        year: 2019,
        color: 'Blue',
        price: 13000
    }
];
function sortingByYear(cars) {
    return cars.sort((a, b) => b.year - a.year);
}
console.log(sortingByYear(cars));
//# sourceMappingURL=index.js.map