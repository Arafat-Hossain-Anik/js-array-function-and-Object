const products = [
    { name: 'hp', processor: 'i5', gen: '7th', price: 5000 },
    { name: 'dell', processor: 'i7', gen: '8th', price: 4000 },
    { name: 'acer', processor: 'i9', gen: '9th', price: 7000 },
    { name: 'lenovo', processor: 'i3', gen: '10th', price: 9000 },
    { name: 'samsung', processor: 'i11', gen: '7th', price: 5000 },
    { name: 'mi', processor: 'i3', gen: '9th', price: 4000 },
];
const product = products.filter(p => p.price == 5000);
console.log(product);