//Write a function which receives two numbers and returns their sum.

var num1 = +prompt('Enter a first number')
console.log('The first number is ' + num1)
var num2 = +prompt('Enter a second number')
console.log('The second number is ' + num2)


console.log('The sum of the two numbers is ' + sum(num1, num2))

function sum(num1, num2) {
    return num1 + num2;
}
