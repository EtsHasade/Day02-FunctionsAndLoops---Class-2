console.log('Exercise 11 - Bank System');

var currBalance = 1000;
var PIN = '0796';
var userPin = prompt('What is the secret PIN?');

if (userPin === PIN) {
    var withdraw = prompt('How much would u like to withdraw?');
    if (withdraw > currBalance) {
        console.log('You don\'t have that much to withdraw!');
    } else {
        // currBalance = currBalance - withdraw;
        currBalance -= withdraw;
        console.log('Your current balance is: ' + currBalance);
    }
} else {
    console.log('Please enter the right code');
}

//i tried to make the PIN as a const and got this error:
//Uncaught SyntaxError: redeclaration of const PIN
//First run works good, second run doesn't work,if i use PIN as const.
