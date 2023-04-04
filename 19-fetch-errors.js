// Javascript Nuggets - Fetch Errors
// Only throws an error if fetch cannot resolve likewise during Netwok call errors where Promise is not resolved
// And if error comes up with status code (400-500) it'll still resolve the Promise and the error won't go to catch block, it'll only go to catch block when Promise is not resolved

import fetch from "node-fetch";

const url = 'https://www.course-api.com/react-tours-projects';

const getTours = async () => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      const msg = `There was an error "${resp.status} ${resp.statusText}"`;
      throw new Error(msg);
    }
    const tours = await resp.json();
    console.log(tours);
  } catch (error) {
    console.log(error);
  }
}

getTours();