// Set object - stores collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();

const random = 'third';

unique.add('first');
unique.add('second');
unique.add('third');
unique.add(random);
unique.add(2);

console.log('unique: ', unique);

// returns true if element existed & removed else false
const result = unique.delete('first');
console.log('result: ', result);

// return true if element existed
const isValue = unique.has('first');
console.log('isValue: ', isValue);


// 2nd Example
const products = [
    {
        title: 'high-back bench',
        company: 'ikea',
    },
    {
        title: 'albany table',
        company: 'marcos',
    },
    {
        title: 'accent chair',
        company: 'caressa',
    },
    {
        title: 'wooden table',
        company: 'ikea',
    },
]

// Find the uniques company and print it in array
const companies = products.map((item) => item.company);
console.log('companies: ', companies);

const uniqueCompany = new Set(companies);
console.log('uniqueCompany: ', uniqueCompany);

const uniqueCompanyArray = [...uniqueCompany];
console.log('uniqueCompanyArray: ', uniqueCompanyArray);

// In one line
const setResult = [...new Set(products.map((item) => item.company))];
console.log('setResult: ', setResult);