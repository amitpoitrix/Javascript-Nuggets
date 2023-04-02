// How to add object keys dynamically using Square bracket notations

// 1. dot notation
const personObj = {
    name: 'Amit',
};

console.log('personObj.name: ', personObj.name);
personObj.age = 26;    // Adding new key:value pairs
console.log('personObj: ', personObj);


// 2. square bracket notation
const itemsObj = {
    'featured-items': ['items1', 'items2'],
};

console.log(itemsObj["featured-items"]);   // Accessing property using square bracket as here we can't use dot notation
console.log(personObj['name']);


// 3. Adding object keys dynamically
let appState = 'loading';
const keyName = 'computer';
const appObj = {
    [appState]: true,
};
appObj[keyName] = 'apple';
console.log('appObj: ', appObj);

// 4. Creating a function to add key's or key's value dynamically
const stateObj = {
    loading: true,
    name: '',
    job: '',
};

function updateState(key, value) {
    stateObj[key] = value;
}

// Adding value to existing property
updateState('name', 'Amit');
updateState('job', 'Software Engineer');
updateState('loading', false);
// Creating new key: value pair
updateState('products', ['Orange', 'Guava']);

console.log('stateObj: ', stateObj);