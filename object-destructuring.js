const products = {
    name: 'hp',
    processor: 'i5',
    gen: '7th',
    price: 5000,
    product: {
        name: 'dell',
        processor: 'i7',
        gen: '9th'
    }
};
const { name: a, processor: b, gen: c } = products.product;
// console.log(name, processor, gen);
console.log(a, b, c);
const { name, product } = products;
console.log(name, product);