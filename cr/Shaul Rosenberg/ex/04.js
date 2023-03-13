// negative values: undefined behaviour
var distance = +prompt('Enter Distance To Travel(in KM)');
var speed = +prompt('Enter Speed(in km/hr)');

var time = distance / speed;

console.log('It would take ' +
    time + ' hours to travel ' +
    distance + ' kilometers at a speed of ' +
    speed + ' kilometers per hour.');