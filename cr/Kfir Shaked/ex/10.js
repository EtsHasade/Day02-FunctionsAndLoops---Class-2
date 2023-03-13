console.log('Exercise 10 - Facebook Friends');

var numberOfFriends = +prompt('How many friends do you have on Facebook?');

if (numberOfFriends > 500) {
    console.log('OMG, a celebrity!');
} else if (numberOfFriends > 300) {
    console.log('You are well connected!');
} else if (numberOfFriends > 100) {
    console.log('You know some people...');
} else if (numberOfFriends > 0) {
    console.log('Quite picky, aren\'t you?');
} else if (numberOfFriends === 0) {
    console.log("Let's be friends!");
}