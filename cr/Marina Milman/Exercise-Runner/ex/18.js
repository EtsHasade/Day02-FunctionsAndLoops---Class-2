// Write a function named isAbove18 which receives a name and an age.
// The function should check if the age is above eighteen and use alert to show a 
// message :
// If the user is younger than eighteen, the message will be 'You are too young', 
// otherwise, the message will be David, You're allowed
// (Use the user's name within the alerts).
// The function should also return a boolean value, print it to the console

var name = prompt('Enter your name')
console.log('The name is ' + name)
var age = +prompt('Enter your age')
console.log('The age is ' + age)

console.log('Is the user above 18 ? ' + isAbove18(name, age))

function isAbove18(name, age) {
    if (age > 18) {
        alert(name + ', You are allowed')
        return true
    } else {
        alert('You are too young')
        return false
    }

}