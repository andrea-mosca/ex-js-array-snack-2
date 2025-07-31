const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];
// // ** SNACK 1
// // Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// const longBooks = books.filter((b) => b.pages > 300);
// console.log(longBooks);

// // Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// const longBooksTitle = longBooks.map((l) => l.title);
// console.log(longBooksTitle);

// // * SNACK 2
// // Creare un array (availableBooks) che contiene tutti i libri disponibili.
// const availableBooks = books.filter((b) => b.available === true);
// console.log(availableBooks);

// // Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// const discountedBooks = availableBooks.map((a) => {
//   const discounted = parseInt(a.price) * 0.8;
//   a.price = `${discounted.toFixed(1)}€`;
//   return a;
// });
// console.log(discountedBooks);

// // Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
// const fullPricedBook = discountedBooks.find((d) => {
//   return Number.isInteger(parseInt(d.price.replace("€", "")));
// });
// console.log(fullPricedBook);

// * SNACK 3
// Creare un array (authors) che contiene gli autori dei libri.
// const authors = books.reduce((acc, b) => [...acc, b.author], []);
// console.log(authors);

// // Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// const areAuthorsAdults = authors.every((e) => e.age >= 18);
// console.log(`sono tutti maggiorenni?`, areAuthorsAdults);

// // Ordina l’array authors in base all’età, senza creare un nuovo array. (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
// areAuthorsAdults
//   ? authors.sort((a, b) => a.age - b.age)
//   : authors.sort((a, b) => b.age - a.age);

// console.log(authors);

// // *SNACK 4
// //  Creare un array (ages) che contiene le età degli autori dei libri.
// const ages = books.reduce((acc, b) => {
//   return [...acc, b.author.age];
// }, []);
// console.log(ages);

// //  Calcola la somma delle età (agesSum) usando reduce.
// const agesSum = ages.reduce((acc, a) => {
//   acc = acc + a;
//   return acc;
// }, 0);

// //  Stampa in console l’età media degli autori dei libri.
// console.log(agesSum / 4);
// // * SNACK 5
// // Usando la l'API http://localhost:3333/books/{id}
// // usa la combinazione di .map() e Promise.all(),
// // per creare una funzione (getBooks) che a partire da un array di id
// // (ids), ritorna una promise che risolve un array di libri (books).
// //  Testala con l’array [2, 13, 7, 21, 19] .
// async function fetchJson(url) {
//   const response = await fetch(url);
//   const obj = await response.json();
//   return obj;
// }
// async function getBooks(ids) {
//   try {
//     const booksPromise = ids.map((id) => {
//       return fetchJson(`http://localhost:3333/books/${id}`);
//     });
//     const books = await Promise.all(booksPromise);
//     return books;
//   } catch (err) {
//     console.error(err);
//   }
// }
// (async () => {
//   try {
//     const res = await getBooks([2, 13, 7, 21, 19]);
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// * SNACK 6
// Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
const areThereAvailableBooks = books.some((b) => b.available);

// Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
// const booksByPrice = books.sort(
//   (a, b) => parseInt(a.price) - parseInt(b.price)
// );
// console.log(booksByPrice);

// Ordina l’array booksByPrice in base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.
books.sort((a, b) => b.available - a.available);
console.log(books);
