const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// const productPriceArr = products.map((ele, i) => {
//     const productPriceObj = {};
//     productPriceObj.name = ele;
//     productPriceObj.price = prices[i];
//     return productPriceObj;
// });

const productPriceArr = products.map((ele, i) => ( { [ele]: prices[i] }))

// console.log(productPriceArr);

// Exercises
const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
// Ex1
const bookNameGenreAuthorList = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

console.log('\nBook name, genre, author name list: ');
console.log(bookNameGenreAuthorList);

// Ex2
const authorAgeWhenReleasedList = books.map((book) => (
  { age: book.releaseYear - book.author.birthYear, author: book.author.name }))
  .sort((a, b) => a.age > b.age ? 1 : -1);

console.log('\nAuthor age when book released list: ');
console.log(authorAgeWhenReleasedList);

// Ex3
const fantasySciFiList = books.filter((book) => book.genre === 'Fantasia' || 
book.genre === 'Ficção Científica');

console.log('\nFiltered list, only scifi/fantasy: ');
console.log(fantasySciFiList);

// Ex4
const currentYear = new Date().getFullYear();
const olderThanSixtyList = books.filter((book) => currentYear - book.releaseYear >= 60)
  .sort((a, b) => a > b ? 1 : -1);

console.log('\nBooks older than 60, sorted: ');
console.log(olderThanSixtyList);

// Ex5
const fantasySciFiAuthors = books.filter((book) => book.genre === 'Fantasia' || 
  book.genre === 'Ficção Científica')
  .map((book) => book.author.name)
  .sort((authorA, authorB) => authorA.localeCompare(authorB));

console.log('\nAuthors of SciFi or Fantasy: ');
console.log(fantasySciFiAuthors);

// Ex6
const booksOlderThanSixty = books.filter((book) => currentYear - book.releaseYear >= 60)
  .map((book) => book.name)
  .sort((bookA, bookB) => bookA.localeCompare(bookB));

console.log('\nNames of books older than 60: ');
console.log(booksOlderThanSixty);

// Ex7
const numberOfInitials = 2;
const authorNameInitials = books.filter((book) => book.author.name.split('.').length - 1
  >= numberOfInitials)
  .map((book) => book.author.name);

console.log(`\nNames of authors with ${numberOfInitials} initials or more: `);
console.log(authorNameInitials);