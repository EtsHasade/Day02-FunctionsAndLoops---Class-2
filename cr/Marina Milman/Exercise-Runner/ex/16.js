//Write a function named isEven which receives a number, and returns true if the
// number is even, and false if it is odd


var number = +prompt('Enter a number')
console.log('The number is ' + number)


console.log('Is the number even ? ' + isEven(number))


function isEven(num) {
    return num % 2 === 0;
}