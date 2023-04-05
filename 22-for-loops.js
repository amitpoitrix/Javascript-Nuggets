// "for-in" loop - iterate over object properties
// Not advised to use it on arrays, especially if the order is important
// On arrays use "for-of" loop instead

const person = {
    name: 'Amit',
    age: 26,
    status: 'Engineer'
}

for(const propertyName in person) {
    console.log(`${propertyName} : ${person[propertyName]}`);
}


// Using of "for-of" loop
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  console.log(x);
}

// console.log("text: ", text);