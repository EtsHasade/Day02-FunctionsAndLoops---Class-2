
// var a = +prompt('Enter Value for a');
// var b = +prompt('Enter Value for b');
// var c = +prompt('Enter Value for c');
var a = 2;
var b = -5;
var c = 2;

var disc = b * b - 4 * a * c;

// console.log('-b =', -b);
// console.log('2a =', 2 * a);
// console.log('b^2 - 4ac =', disc);


var bSign = '+'
if (b < 0) bSign = ''

var cSign = '+'
if (c < 0) cSign = ''

// the equation
console.log(a + 'x\u00B2' + bSign + b + 'x' + cSign + c);

// x1, x2 solution
if (disc > 0) {
    var x1 = (-b + Math.sqrt(disc)) / (2 * a);
    var x2 = (-b - Math.sqrt(disc)) / (2 * a);
    console.log('x1 =', x1);
    console.log('x2 =', x2);
} else if (disc === 0) {
    // single solution
    var x = -b / (2 * a);
    console.log('x =', x);
} else {
    // no solution - sqrt(negative) undefined
    console.log('No solutions for given equation');
}


