// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];

// 1st way: store the result in function variable and then map it out to form new array
const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log('ages: ', ages);

// 2nd Way: In order to form new array of objects containing customizable properties
const newPeople = people.map((item) => {
  return {
    firsName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log('newPeople: ', newPeople);


// Frontend use case:
// const names = people.map((person) => `<h2>${person.name}</h2>`);
// const result = document.querySelector('#result');

// result.innerHTML = names.join('');