// Callback Function in JS
// Callback function are passed as an arguement in another function and is being invoked in later part of the function

// Ex: 1
function makeUppercase(value) {
    console.log(value.toUpperCase())
}
  
function reverseString(value) {
    console.log(value.split('').reverse().join(''));
}
  
function handleName(name, cb) {
    const fullName = `${name} smith`;
    console.log(fullName);
    // Here callback function is being invoked in later part of the function
    cb(fullName);
}
  
handleName('peter', makeUppercase);
handleName('peter', reverseString);
 

// Ex: 2 In Frontend
// const btn = document.querySelector('.btn')

// // btn.addEventListener('click', function () {
// //   console.log('hello world')
// // })

// btn.addEventListener('click', sayHello)

// function sayHello() {
//     console.log('hello people')
// }