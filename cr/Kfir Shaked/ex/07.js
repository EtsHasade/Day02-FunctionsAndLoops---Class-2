console.log('Exercise 7 - Two Numbers Equal the Third');

var num1 = +prompt('What is your first number?');
var num2 = +prompt('What is your second number?');
var num3 = +prompt('What is your third number?');
var firstTwoSum = num1 + num2;

if (firstTwoSum === num3) {
    console.log(num1 + ' + ' + num2 + ' = ' + num3);
} else {
    console.log(num1 + ' + ' + num2 + ' != ' + num3);
}
