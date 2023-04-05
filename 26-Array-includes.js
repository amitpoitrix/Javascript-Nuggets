// Array includes() - checks if items is in array useful in the conditional statements

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'meat';
const isinclude = groceries.includes(randomItem);
console.log('isinclude: ', isinclude);

if(groceries.includes(randomItem)){
    console.log('Yeah! Its included');
}