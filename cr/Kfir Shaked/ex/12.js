console.log('Exercise 12 - Guess Who');

alert('Think about an actor and i will try to guess it!');
var isMale = confirm('Is he a man?');

if (isMale) {
    var isBlonde = confirm('Is he blonde?');
    if (isBlonde) {
        console.log("It's Philip Seymour!");
    } else {
        console.log("It's Tom Cruise!");
    }
} else {
    var isEnglish = confirm('Is she english?');
    if (isEnglish) {
        console.log("It's Keira Knightley!");
    } else {
        console.log("It's Natalie Portman!");
    }
}
