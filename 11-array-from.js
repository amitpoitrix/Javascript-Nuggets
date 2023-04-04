// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

// Ex: 1
const udemy = 'udemy'
console.log("Array.from(udemy): ", Array.from(udemy));

// Ex: 2: Pagination
// Array.from({Object with newly created array length}, {callback function})
const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

console.log('items: ', items);

const itemsPerPage = 12;
const pages = Math.ceil(items.length / itemsPerPage);   // 120/12 = 10

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;   // index - (0-9)
  const tempItems = items.slice(start, start + itemsPerPage);   // 1st case: [0, 12) i.e., [0, 11]

  return tempItems;
})
console.log('newItems: ', newItems);