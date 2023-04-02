// Unique Values

// Here we've to find unique category in array
const menu = [
    {
      name: 'pancakes',
      category: 'breakfast',
    },
    {
      name: 'burger',
      category: 'lunch',
    },
    {
      name: 'steak',
      category: 'dinner',
    },
    {
      name: 'bacon',
      category: 'breakfast',
    },
    {
      name: 'eggs',
      category: 'breakfast',
    },
    {
      name: 'pasta',
      category: 'dinner',
    },
  ];
  // map - get all instances
  const categoryMap = menu.map((item) => item.category);
  console.log('categoryMap: ', categoryMap);    // Here categoryMap is an array but value is not unique

  // So we make use of Set Class which is new feature included in ES6
  const categorySet = new Set(menu.map((item) => item.category));
  console.log('categorySet: ', categorySet);    // Here categorySet is an object but values are unique but not in array

  // Now using spread operator to turn this object back to array
  const usingSpreadOperator = [... new Set(new Set(menu.map((item) => item.category)))];
  console.log('usingSpreadOperator: ', usingSpreadOperator);

  // Adding new value eg: 'all' as a new value while creating array from object
  const categories = ['all', ...new Set(menu.map((item) => item.category))];
  console.log('categories: ', categories);

  // Frontend use case:
//   const result = document.querySelector('.result');
//   result.innerHTML = categories
//     .map((category) => {
//       return `<button>${category}</button>`;
//     })
//     .join('');