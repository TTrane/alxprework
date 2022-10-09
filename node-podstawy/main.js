console.log('Hello World!')

// Typ Zmiennych

// String
// Number
// Boolean
// Object
// null/undefined


// Jak zapisujemy zmienne (3 sposoby)

// Scope globalny
var name = "damian";

// Scope leksykalny (if, for)
let name2 = 'Damian2';

// const nie mozna nadpisac, ale mozna dopisac/usunac dane ze srodka (w przypadku array lub obiektow)

const name3 = 'Damian3';


// Typy zlozone

// Array

const names = ['Damian', 'Paweł', 'Dominik'];

// Metody

// push - dodawanie
// names.push('Marcin');
// pop - usuwanie z konca listy
// names.pop()
// slice - tworzenie tablicy z innej tablicy przez wyciecie kilku elementow zdefiniowanych indeksem
// names.slice(0, 2);
// splice - usuniecie lub dodanie elementu
// names.splice(0, 1, 'Daniel');
// shift - usuniecie 1 elemenetu
// names.shift()
// unshift
// names.unshift(1, 2)

// concat - dodawanie do tablicy

// names.concat('Paweł')

// join - tworzenie tablicy ze stringa
// split - tworzenie stringa z tablicy
// includes - sprawdzenie czy tablica zawiera element



// forEach
// np. do sumowania wartości lub do przechodzenia przez elementy

// names.forEach(name => {
//   console.log(name);
// })

// map

// const arrayOfLetters = [];

// names.forEach(name => {
//   arrayOfLetters.push(name.length)
// });

// console.log(arrayOfLetters)

// const arrayOfLetters = names.map(name => {
//   return name.length
// });

// console.log(arrayOfLetters)

// filter

const shopping = [
  {
    name: "Banan",
    price: 3.99
  },
  {
    name: "Chleb",
    price: 4.99
  },
  {
    name: "Wiśnie",
    price: 19.99
  }
]

// const calculateMostExpensiveProducts = (price) => {
//   return shopping.filter(product => {
//     return product.price > price
//   })
// }

const expensiveProducts = shopping.filter(product => {
  return product.price > 10
})

console.log(expensiveProducts)


// 1. Za pomoca funkcji forEach, policz sume produktow

let sum = 0;

shopping.forEach(product => {
  sum = sum + product.price;
})

console.log(sum);

// 2. Oblicz cenę produktów (shopping), które w swojej nazwie mają literę e

// Sposob #1

// const productWithLetterE = shopping.filter(product => {
//   return product.name.includes('e');
// })

// let productWithLetterESum = 0;

// productWithLetterE.forEach(product => {
//   productWithLetterESum += product.price;
// });



// Sposob #2

// let productWithLetterESum = 0;

// shopping
//   .filter(product => product.name.includes('e'))
//   .forEach(product => {
//     productWithLetterESum += product.price;
//   });

// console.log(productWithLetterESum.toFixed(2))



// 3*. Wroc do zadania z listą i spróbuj odfiltrować produkty :)




// sort
// reduce


// Properties

// .length dlugosc


// Cwiczenia forEach, map, filter

// Mamy listę ksiązek



// const books = [
//   {
//     name: "Harry Potter",
//     category: "adventure"
//   },
//   {
//     name: 'Alice in Wonderland',
//     category: 'fantasy'
//   },
//   {
//     name: 'Lord of the Rings',
//     category: 'fantasy'
//   }
// ]

// 1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure

// const adventureBooks = books.filter(book => {
//   return book.category === 'adventure'
// })

// console.log(adventureBooks)

// 2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'

// const booksWithPhraseEr = books.filter(book => {
//   return book.name.includes('er');
// })

// console.log(booksWithPhraseEr)

// 3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki

// const letterFromBooks = books.map(book => {
//   return book.name.length
// });

// console.log(letterFromBooks)






// !---------------- Funkcje ------------------------

function sumDigits(a, b) {
  return a + b;
}

console.log(sumDigits(2, 3));
console.log(sumDigits(5, 7));
console.log(sumDigits(1, 10));


// Stworz funkcje, ktora bedzie zwracac informacje, czy w danym stringu znajduje sie dany ciag znakow


const isInString = (string, phrase) => {
  return string.includes(phrase);
}

const includesEr = isInString('Harry Potter', 'er');

console.log(includesEr)

const searchElement = (string, phrase) => {
  if(string.includes(phrase)) {
    return string;
  }
}

const foundElement = searchElement('Harry Potte', 'er');


// Uzywanie kolekcji (array obiektow) w funkcji

const books2 = [
  {
    name: "Harry Potter",
    category: "adventure"
  },
  {
    name: 'Alice in Wonderland',
    category: 'fantasy'
  },
  {
    name: 'Lord of the Rings',
    category: 'fantasy'
  }
]

// PURE FUNCTION
const filterElements = (collection, phrase) => {
  return collection.filter(element => {
    return element.name.includes(phrase)
  })
}

console.log(filterElements(books2, 'er'));


// 1. Stworz funkcje multiply, ktorej zadaniem bedzie wymnozyc przez siebie 2 liczby

// multiply(3, 3) -> 9

const multiply = (a,b) => a * b;

// function multiply(a, b) {
//   return a * b;
// }

console.log(multiply(3,3))


// 2. Stworz funkcje, ktora zwroci liczbe znakow z danego stringa

const checkLetter = string => string.length;

// function checkLetter(string) {
//   return string.length;
// }

// checkLetter('Damian') -> 6

// 3. Stworz funkcje findByCategory, ktora przyjmuje kolekcje i kategorie, a nastepnie wyszukaj wszystkie ksiazki, ktore maja podana kategorie.

// findByCategory(books2, 'adventure') -> [{ob1}]

const books3 = [
  {
    name: "Harry Potter",
    category: "adventure"
  },
  {
    name: 'Alice in Wonderland',
    category: 'fantasy'
  },
  {
    name: 'Lord of the Rings',
    category: 'fantasy'
  }
]

const findByCategory = (collection, category) => {
  return collection.filter(item => {
    return item.category === category
  });
}

console.log(findByCategory(books3, 'fantasy'));

// 4. Rozszerz zadanie 3 o warunek, ze jesli nie znajdziemy zadnej ksiazki o podanej kategorii, to funkcja wyswietli napis "No books"

const findByCategoryExtended = (collection, category) => {
  const filteredCollection = collection.filter(item => {
    return item.category === category
  });

  if(filteredCollection.length === 0) {
    return 'No Books'
  }

  return filteredCollection
}

console.log(findByCategoryExtended(books3, 'fantasy'));
console.log(findByCategoryExtended(books3, 'fantas'));


// ! ------- POZOSTALE FUNKCJE w PROG FUNKCYJNYM ----------

// find

const books4 = [
  {
    name: "Harry Potter",
    category: "adventure"
  },
  {
    name: 'Alice in Wonderland',
    category: 'fantasy'
  },
  {
    name: 'Lord of the Rings',
    category: 'fantasy'
  }
]

// Find sluzy do zlapania pierwszego elementu znalezionego

const fantasyBook = books4.find(book => book.category === 'adventure')

console.log(fantasyBook)

// reduce

const shopping3 = [
  {
    name: "Banan",
    price: 3.99
  },
  {
    name: "Wiśnie",
    price: 19.99
  },
  {
    name: "Chleb",
    price: 4.99
  },
]

const price3 = shopping3.reduce((accumulator, product) => {
  console.log(accumulator);

  return accumulator - product.price;
}, 500)

console.log(price3)

// Sort

const sortedShoppingList = shopping3.sort((a, b) => {
  return a.price > b.price ? 1 : -1;
})

console.log(sortedShoppingList)
console.log('-------------------------')
// 1. Za pomocą funkcji sort, zwróc produkt, który jest najdrozszy
const shopping4 = [
  {
    name: "Banan",
    price: 3.99
  },
  {
    name: "Wiśnie",
    price: 19.99
  },
  {
    name: "Chleb",
    price: 4.99
  },
]

const sortedShoppingList4 = shopping4.sort((a, b) => {
  return a.price > b.price ? 1 : -1;
})



console.log(sortedShoppingList4);

// 2. Za pomoca funkcji find, sprawdz cene chleba
// 3. Za pomoca funkcji reduce, sprawdz srednia wzrostu w klasie. W klasie sa 3 osoby [178, 164, 199]