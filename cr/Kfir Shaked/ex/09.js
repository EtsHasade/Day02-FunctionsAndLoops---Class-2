console.log('Exercise 9 - Absolute Value');

var num1 = +prompt('First number?');
var num2 = +prompt('Second number?');

if (isNaN(num1) || isNaN(num2)) {
    console.log('Please input only numbers');
} else {

    // if (num1 > num2) {
    //     diff = num1 - num2;
    // } else {
    //     diff = num2 - num1;
    // }

    var diff = num1 - num2
    if (diff < 0) diff *= -1

    var numsValueStr = 'num1=' + num1 + ', num2=' + num2
    
    if (diff < num1 && diff < num2) {
        console.log(
            numsValueStr +
            ', diff=' +
            diff +
            ' (numbers are relatively close!)'
        );
    } else {
        console.log(numsValueStr + ', diff=' + diff);
    }
}

