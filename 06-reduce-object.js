// Reduce - Objects

import fetch from 'node-fetch';

// cart example
const cart = [
    {
      title: 'Samsung Galaxy S7',
      price: 599.99,
      amount: 1,
    },
    {
      title: 'google pixel ',
      price: 499.99,
      amount: 2,
    },
    {
      title: 'Xiaomi Redmi Note 2',
      price: 699.99,
      amount: 4,
    },
    {
      title: 'Xiaomi Redmi Note 5',
      price: 399.99,
      amount: 3,
    },
];

// Ques: Find the total no. of items along with total price

// Using reduce method to create new object{totalItems, cartTotal} 
// Here, total will have value mention in 2nd args of reduce()(i.e., initial value) while  cartItem will have value of cart
let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {  
    // Getting amount & price property from cartItem(Here, cartItem is each object mention in cart array[])
    const { amount, price } = cartItem;
    // count items and adding result in totalItems property of total object
    total.totalItems += amount
    // count sum
    total.cartTotal += amount * price
    return total
},
{
    totalItems: 0,
    cartTotal: 0,
});

// Here, toFixed(2) will give decimal value upto 2 digit but in string so we make use of parseFloat to convert into number
cartTotal = parseFloat(cartTotal.toFixed(2));
console.log('totalItems: ', totalItems);
console.log('cartTotal: ', cartTotal);


// github repos example
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () => {
    // Fetching data from Github API using fetch()
    const response = await fetch(url);
    // Converting fetched data into json object
    const data = await response.json();
    // Using reduce() to create new object with different language as property along with its count
    const newData = data.reduce((total, repo) => {
        const { language } = repo;
        // 1st Way
        // if (language) {
        //   if (total[language]) {
        //     total[language] = total[language] + 1
        //   } else {
        //     total[language] = 1
        //   }
        // }

        // 2nd Way
        if (language) {
            total[language] = total[language] + 1 || 1; // Undefine + 1 is False
        }
        return total;
    }, {});
    console.log(newData)
}

fetchRepos();