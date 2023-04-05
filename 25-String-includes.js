// String includes() - checks if string contains another string

const products = [
    { title: 'Modern Poster' },
    { title: 'Bar Stool' },
    { title: 'Armchair' },
    { title: 'Leather Chair' },
];

const text = 'm';

const filteredProduct = products.filter((product) => product.title.toLowerCase().includes(text));
console.log('filteredProduct: ', filteredProduct);