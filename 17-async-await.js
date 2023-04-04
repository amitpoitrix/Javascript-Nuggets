//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// Example 1
// here example() will always returns Promise as async is being used before function
const example = async () => {
  return 'hello there';
}

async function someFunc() {
  const result = await example();   // here await make sure Promise is fulfilled and return back Promise data if any
  console.log(result);
  console.log('hello world');
}

someFunc();

// Example 2
  const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' },
  ]
  
  const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
  ]
  
  // Using Async/Await
  const getData = async () => {
    try {
      const user = await getUser('john');
      const articles = await getArticles(user.id);
      console.log(articles);
    } catch (error) {
      console.log(error);
    }
  }
  getData();

  // Using Normal Promise method using .then().catch()
//   getUser('susan')
//     .then((user) => getArticles(user.id))
//     .then((articles) => console.log(articles))
//     .catch((err) => console.log(err))
  
  // 1st function returning Promise
  function getUser(name) {
    return new Promise((resolve, reject) => {
      const user = users.find((user) => user.name === name);
  
      if (user) {
        return resolve(user);
      } else {
        reject(`No such user with name : ${name}`);
      }
    })
  }
  
  // 2nd function returning Promise
  function getArticles(userId) {
    return new Promise((resolve, reject) => {
      const userArticles = articles.find((user) => user.userId === userId);
  
      if (userArticles) {
        return resolve(userArticles.articles);
      } else {
        reject(`Wrong ID`);
      }
    })
  }