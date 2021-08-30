const products = {
    name: 'hp',
    processor: 'i5',
    gen: '7th',
    price: 5000,
    products: {
        name: 'dell',
        processor: 'i7',
        gen: '9th',
        price: [10, 15, 20, 30, 40, 50, 60],
        products: {
            name: 'hp',
            processor: 'i5',
            gen: '7th',
            price: 5000,
            products: {
                name: 'hp',
                processor: 'i5',
                gen: '7th',
                price: 5000,
                products: {
                    name: 'hp',
                    processor: 'i5',
                    gen: '7th',
                    price: 5000,
                    products: {
                        name: 'hp',
                        processor: 'i5',
                        gen: '7th',
                        price: 5000,
                    }
                }
            }
        }
    },
    roll: [1702053, 1602039, 1602071, 1807060]
};
// const { name: a, processor: b, gen: c } = products.products;
// console.log(name, processor, gen);
// console.log(a, b, c);
// console.log(products.products.product?.products?.products.products);
// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log('myObject.p', myObject?.p?.q);

// destructuring array 
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);

const [best, faltu] = ['momotaj', 'poroshi'];
// console.log(best, faltu);
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };

//chaining

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
console.log(company);
// console.log(company?.web?.tech?.third);
// console.log(company?.backend?.tech.third);
