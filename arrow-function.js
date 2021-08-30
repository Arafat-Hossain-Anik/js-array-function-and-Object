const fiveTimes = number => number * 5;
console.log(fiveTimes(10));
const twoTimes = (num1, num2) => ((num1 + 2) * (num2 + 2));
console.log(twoTimes(1, 2));
console.log(twoTimes(4, 5));
const threeTimes = (num1, num2, num3) => (num1 * num2 * num3);
console.log(threeTimes(1, 2, 3));
const anotherTwoTimes = (a, b) => {
    a = a + 2;
    b = b + 2;
    return a * b;
}
const result = anotherTwoTimes(5, 6);
console.log(result);