// Three methods to convert object into arrays
// Object.keys() - converts property names to array
// Object.values() - converts property values into array
// Object.entries() - converts both & forms a 2D array

const person = {
    name: 'Amit',
    age: 26,
    status: 'engineer'
}

// Object.keys(objectName) -> returns an string[] of properties or methods of object 'objectName'
const keyArray = Object.keys(person);
console.log('keyArray: ', keyArray);

// Object.values(objectName) -> returns an string[] of properties or methods of object 'objectName'
const valArray = Object.values(person);
console.log('valArray: ', valArray);

// Object.entries(objectName) -> returns an string[] of properties or methods of object 'objectName'
const entArray = Object.entries(person);
console.log('entArray: ', entArray);


// Using Object created array in map
const newResult = entArray.map((item) => {
    const [first, second] = item;
    console.log(first, second);
});

// Using 'for-of' loop
for(const item of entArray) {
    const [a, b] = item;    // Using Array destructuring
    console.log(a, b);
}

// OR
for(const [a, b] of entArray) {
    console.log(a, b);
}