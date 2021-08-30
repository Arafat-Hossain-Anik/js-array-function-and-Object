const numbers = [10, 15, 4, 7, 8, 1, 3, 18, 14, 25, 5, 12, 9, 13, 20];
const numbersMultiplyByFive = numbers.map(number => number * 5);
// console.log(numbersMultiplyByFive);
const oddNumbers = numbers.filter(n => n % 2);
// console.log(oddNumbers);
numbers.forEach(n => console.log(n));
// console.log(numbers);