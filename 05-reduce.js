// Reduce
// iterates, callback function
// reduces to a single value - number(,0), array(,[]), object(,{})
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

const staff = [
    { name: 'bob', age: 20, position: 'developer', salary: 100 },
    { name: 'peter', age: 25, position: 'designer', salary: 300 },
    { name: 'susy', age: 30, position: 'the boss', salary: 400 },
    { name: 'anna', age: 35, position: 'intern', salary: 10 },
  ];
  
  const dailyTotal = staff.reduce((total, person) => {
    // console.log(total);
    // console.log(person.salary);
    console.log(`Total ${total}`);
    console.log(`Current ${person.salary}`);
    total += person.salary;
    return total;   // This is imp if not return than acc(i.e., total) will have undefine value from 2nd iteration
  }, 0);    // 0 -> for number, [] -> for array, {} -> for object
  
  console.log(dailyTotal);