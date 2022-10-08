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
    name: "banan",
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