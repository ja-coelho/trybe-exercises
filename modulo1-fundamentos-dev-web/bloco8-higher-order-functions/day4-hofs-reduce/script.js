const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = numbers.reduce((acc, number) => (
  number % 2 === 0? number + acc : acc), 0);

// console.log(sumEven);

const students = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

const bestGradeForStudent = students.map((student) => ({
  name: student.nome, subject: student.materias
    .reduce((result, ele) => (
      ele.nota >= result.nota? ele : result), student.materias[0]).name
}));

// console.log(bestGradeForStudent);

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
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const matrixToArray = arrays.reduce((acc, element) => (acc.concat(element)), []);

console.log('\nExercise 1, Matrix to Array: ');
console.log(matrixToArray);

// Ex2
const stringifyNames = books.reduce((acc, curr, i, arr) => {
  if (i === arr.length - 1) return `${acc} ${curr.author.name}.`;
  return `${acc} ${curr.author.name}, `;
  }, '').trim();

console.log('\nExercise 2, Stringify Names: ');
console.log(stringifyNames);

// Ex3
const averageAgeWhenRelease = books.reduce((acc, curr) => (
  acc + curr.releaseYear - curr.author.birthYear), 0) / books.length;

console.log('\nExercise 3, Average author age when book released: ');
console.log(averageAgeWhenRelease);

// Ex4
const findLongestBookName = books.reduce((acc, curr) => (
  acc.name.length > curr.name.length? acc : curr), books[0]);

console.log('\nExercise 4, Book with longest name is: ');
console.log(findLongestBookName);

// Ex5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const character = 'a';

const characterFrequency = names.reduce((acc, curr) => (acc + curr).toLocaleLowerCase(), '')
  .split('')
  .reduce((arr, curr) => (curr === character? arr += 1 : arr), 0);

console.log('\nExercise 5, Number of times "' + character + '" appears is: ');
console.log(characterFrequency);

// Ex6
const studentsArr = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentsAverage = studentsArr.map((student, index) => ({
  name: student,
  average: grades[index].reduce((acc, curr) => (acc + curr), 0) / grades[index].length
}));

console.log('\nExercise 6, Average grade of each student is: ');
console.log(studentsAverage);