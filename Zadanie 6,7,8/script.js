const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

//zadanie 6
const filterPagesEven = (list) => list.filter((book) => book.pages%2 == 0);
const filterGenreEndY = (list) => list.filter((book) => book.genre.endsWith("y"));

const sumLetters = (book) => book.reduce((totalLetters, book) => totalLetters + book.title.replace(/\s/g, '').length, 0);

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

let result = compose(filterPagesEven, filterGenreEndY, sumLetters);
console.log(result(books));


//zadanie 7
const filterRatingMoreThan5 = (list) => list.filter((book) => book.rating > 5);

const filterPagesOdd = (list) => list.filter((book) => book.pages%2 == 1);
const filterTitleContainsNumber = (list) => list.filter((book) => /\d+/.test(book.title));

const sumPages = (book) => book.reduce((totalPositiveRatings, book) => totalPositiveRatings + 1, 0);

const compose2 = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

let result2 = compose2(filterPagesOdd, filterTitleContainsNumber, filterRatingMoreThan5, sumPages);
console.log(result2(books));

//zadanie 8
const sortBooksDesc = (list) => list.sort((a, b) => b.title.length - a.title.length);
const mapToTitle = (list) => list.map(({title}) => title);

const compose3 = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

let result3 = compose3(sortBooksDesc, mapToTitle);
console.log(result3(books)[1]);