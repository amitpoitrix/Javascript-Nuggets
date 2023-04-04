// Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

// Frontemd Example
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  setTimeout(() => {
    console.log('First: ','Red');
    setTimeout(() => {
        console.log('Second: ','Blue');
      setTimeout(() => {
        console.log('Third: ','Green');
      }, 2000)
    }, 3000)
  }, 1000)
})