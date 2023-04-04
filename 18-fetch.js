//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

import fetch from "node-fetch";

const url = 'https://www.course-api.com/react-tours-project';

// Fetching API data using .then()
// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

// Fetching API data using Async/Await
const getTours = async () => {
  try {
    const resp = await fetch(url);  // returns Promise
    const data = await resp.json(); // here we've to make use of json() to format the data and it'll also return Promise
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getTours();