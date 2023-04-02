// Rest Operator...
// used to:
// 1. gathers/collects items
// 2. destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// 1. arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);    // restOfTheFruits is of type array

const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);


// 2. objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
console.log(job, rest); // here rest is of type object is with rest of the properties

// 3. functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

getAverage(person.name,67,78,89,78);

const testScores = [67, 78, 99, 100];
// If we directly pass testScores[] it will result in [[]] so we make use of ...spread operator to avoid nested array [[]]
getAverage(person.name, ...testScores);