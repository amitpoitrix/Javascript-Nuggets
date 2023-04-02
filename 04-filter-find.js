// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance, returns first match, if no match - undefined

const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'intern' },
  ];

  // filter
  const youngPeople = people.filter((person) => {
    // if (person.age < 30) {
    //   return person;
    // }
    return person.age <= 25;
  });
  console.log('youngPeople using Filter: ', youngPeople);
  
  const developers = people.filter((person) => person.position === 'developer');
  console.log('Developers using Filters Method: ', developers);

  // no match in filter
  const seniorDevs = people.filter((item) => item.position === 'senior dev');
  console.log('No match in case of filter: ', seniorDevs);  // Empty Array []


  // find
  const peter = people.find((person) => person.name === 'peter');
  console.log('Find Method: ', peter);

  // no match in find
  const oldPerson = people.find((person) => person.age > 35);
  console.log('No match in case of find: ', oldPerson); // undefined


  // multiple matches in case of find
  const randomPerson = people.find((person) => person.age < 35);
  console.log('Multiple matches in case of find: ', randomPerson);
  
  // Accessing property of resultant object
  const anna = people.filter((person) => person.name === 'anna');  
  console.log('Accessing property in case of find method: ', peter.position);
  console.log('Accessing property in case of filter method: ',anna[0].position);