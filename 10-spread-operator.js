// Spread Operator...
// Allows and iterable to spread/expand individually inside receiver
// Split into single items and COPY them

const udemy = 'udemy';
// Using spread operator to spread udemy into individual letter
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

// Copy using spread operator
// reference
// const newFriends = friends;
// copy
const newFriends = [...friends];
newFriends[0] = 'nancy';    // only change the 0th index value for newFriends[]
console.log(newFriends);
console.log(friends);

// ES2018 - ES8 - spread operator for object
const person = { 
    name: 'john', 
    job: 'developer' 
};

const newPerson = { ...person, city: 'chicago', name: 'peter' };    // can add new props along with edit value for existing props
console.log(newPerson);