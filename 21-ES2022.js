//  Javascript Nuggets
//  ECMAScript 2022
// at() - takes integer and returns the item at that index - string,array

// Top Level Await - Basic Example
// import fetchTabs from './fetchTabs.js';
// const tabs = await fetchTabs();
// console.log(tabs);

// Use of .at() to fetch value of array elements based on index (0,1,2...) for forward & (-1, -2, -3,..) from back
const scores = [99, 90, 100];

const oldLast = scores[scores.length - 1];
console.log(oldLast);

const newLast = scores.at(-1);
console.log(newLast);

const channel = 'Coding Addict';
console.log(channel.at(0));

// Directly use await withuut wrapping inside any function but async keyword is required when use inside function
import fetch from "node-fetch";

const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data);