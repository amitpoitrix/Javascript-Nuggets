// faster/easier way to access/unpack variables from arrays and here order matters as compare to objects

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// 1st Way to access array values
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log('fruit1: ', fruit1, ' fruit2: ', fruit2, ' fruit3: ', fruit3);

// 2nd way Using Destructuring of Array - use comma(,) to skip array values in order
const [friend1, , friend3, , friend5, friend6] = friends;

console.log(friend1, friend3);
console.log(friend1, friend3, friend5);
console.log(friend1, friend3, friend5, friend6);    // Print undefined if there is no value while destructuring
console.log(friend1, friend3, friend5, friend6);


// Swap Variables
let first = 'bob';
let second = 'john';

// 1st way
// let temp = second;
// second = first;
// first = temp;

// 2nd way: Using Array destructuring
[second, first] = [first, second];

console.log(first, second);