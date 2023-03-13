//Write a function named getBigger which receives two numbers and returns the 
// bigger one.

var num1 = +prompt('Enter a first number')
console.log('The first number is ' + num1)
var num2 = +prompt('Enter a second number')
console.log('The second number is ' + num2)

console.log('The bigger number is ' + getBigger(num1, num2))

function getBigger(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return null
    }
}