// The Elevator 
// • Initialize a currFloor variable to 0.
// • Ask the user which floor would he like to go to. 
// • Check that the floor is between -2 and 4.
// • Update the currFloor variable accordingly.
// • Let the user know his current floor.
// • If the user goes to floor 0 alert 'Bye bye'.
// • If the user goes to the parking lot (negative floors) alert: 'Drive safely'.

var currFloor = 0
var floor = +prompt('Which floor would you like to go to?')

if (floor >= -2 && floor <= 4) {
    currFloor = floor
    alert('You are on floor ' + currFloor)
    if (currFloor === 0) {
        alert('Bye bye')
    } else if (currFloor < 0) {
        alert('Drive safely')
    }
} else {
    alert('Floor is out of range')
}