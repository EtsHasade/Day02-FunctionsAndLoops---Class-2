console.log('Exercise 8 - The Smallest of Three Numbers');

var num1 = +prompt('What is your first number?');
var num2 = +prompt('What is your second number?');
var num3 = +prompt('What is your third number?');

if (num1 < num2 && num1 < num3) {
    console.log('The smallest number is number 1: ' + num1);
} else if (num2 < num1 && num2 < num3) {
    console.log('The smallest number is number 2: ' + num2);
} else {
    console.log('The smallest number is number 3: ' + num3);
}
