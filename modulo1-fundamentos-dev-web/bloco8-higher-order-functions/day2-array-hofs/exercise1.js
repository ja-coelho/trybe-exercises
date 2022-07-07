// Exercise 1
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
        // birthYear: 1948,
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

// Requisite 1
function authorBornIn(arr, year) {
  return arr.find((book) => book.author.birthYear === year).author.name;
}

console.log(authorBornIn(books, 1947));

// Requisite 2
function smallerName(arr) {
  let nameBook;
  arr.forEach((book, index) => {
    if (index === 0) {
      nameBook = book.name;
    }
    nameBook = (book.name.length < nameBook.length ? book.name : nameBook);
  });
  return nameBook;
}

console.log('shorter book is ' + smallerName(books));

// Requisite 3
function bookByNameLength(arr, length) {
  return arr.find((book) => book.name.length === length).name;
}

console.log(bookByNameLength(books, 26));

// Requisite 4
function sortBooksRelease(books) {
  books.sort((element2, element1) => element2.releaseYear - element1.releaseYear);
  return books
}

// console.log(sortBooksRelease(books));

// Requisite 5
function allBornCentury(books, century) {
  return books.every((book) => (book.author.birthYear - (century * 100 - 100)) > 0);
}

console.log('all authors born in 20 century: ' + allBornCentury(books, 20));

// Requisite 6
function decadeChecker(book, decade) {
  let decadeSubtraction = book.releaseYear % 100 - decade;
  return (decadeSubtraction > 0 && decadeSubtraction <= 10);

}

function containsBookReleasedDecade(books, decade) {
  return books.some((book) => decadeChecker(book, decade));
}

console.log('contains books released in 80s: ' + containsBookReleasedDecade(books, 80));

// Requisito 7
function authorDuplicateYear(books) {
  let sortedBooks = [...books];
  sortedBooks.sort((element2, element1) => {
    if(element2.author.birthYear === element1.author.birthYear) {
      return -1;
    }
    return 0;
  });
  return !books.every((book, index) => book === sortedBooks[index]);
}

console.log('more than one author born on same year: ' + authorDuplicateYear(books));
