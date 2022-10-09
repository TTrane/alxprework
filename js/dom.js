// Wbudowanie obiekty

// window - obiekt przegladarki
// document - obiekt drzewa DOM (HTML) + metody do operowania na drzewie

// DOM - Lapanie elementow

// querySelector - zwraca tylko pierwszy element, ktory znajdzie
const element = document.querySelector('#text');

console.log(element);

// querySelectorAll - zwraca wszystkie elementy, ktore znajdzie
// *. Trzeba skorzystac z petli forEach, zeby przejsc przez elementy
const headingElements = document.querySelectorAll('h1');

// Ciekawostka: jak chcemy miec dostep do map, reduce itp, musimy zamienic NodeList na zwykla tablice

// console.log([...headingElements])

// headingElements.forEach(element => {
//   console.log(element);
// })

// Metody na elementach

// console.log(element.innerText) // tekst
// console.log(element.innerHTML) // tekst

// const body = document.querySelector('body');

// console.log(body.innerHTML) zwraca HTML ze srodka elementu

// Zmiana elementow

// element.innerText = 'Zmieniony tekst';
// element.innerHTML = '<span> Zmiana </span>';

// console.log(element.outerHTML);

// Dodanie elementu do HTML za pomoca innerHTML
// list.innerHTML += `<li> Tekst z inputa </li>`

// Wyczyszczenie elementu
// list.innerHTML = ''
// list.remove();

// Szukanie elementu wewnatrz innych elementow

// list.querySelector('child-selector')


// Metody na elementach

// element.classList.add('nazwa-klasy') - dodanie klasy do elementu
// element.classList.remove('nazwa-klasy') - usuniecie klasy do elementu
// element.classList.toggle('nazwa-klasy') - toggle klasy do elementu

// element.tagName - zwraca elementu tagu

// element.parentElement - rodzic elementu
// element.firstElementChild - pierwsze dziecko
// element.lastElementChild - ost dziecko
// element.querySelector - wyszukiwanie

// element.getAttribute('class') - pobranie atrybutu
// element.setAttribute('id', '123') - dodanie atrybutu

// Metody specjalne

// element.value - pobranie wartosci inputa
// element.id - pobranie id elementu
// element.src - pobranie src elementu
// element.alt - pobranie alt elementu


// element.value = 'Nowa wartosc inputa'
// element.src = 'Nowy adres obrazka'


// Eventy

// eventy
  // click
  // doubleclick
  // onmouseenter
  // onmouseout
  // onmouseleave
  // keyup
  // keydown
  // change
  // submit
  // resize

// element.addEventListener('event', function() {})

element.addEventListener('click', (event) => {
  event.preventDefault(); // blokowanie defaultowej akcji przegladarki
  console.log('Im clicked!');
})

window.addEventListener('resize', () => {
  console.log('hello');
})

// 1. Stworz w HTML element button, a nastepnie w JS spraw, zeby po kliknieciu w przycisk, pojawil sie alert "Hello World!"

const helloWorldButton = document.querySelector('#btn1');

helloWorldButton.addEventListener('click', (event) => {
  event.preventDefault()

  alert('Hello World!');
})

// 2. Stworz w HTML drugi button, ktory po kliknieciu, doda do HTML element p z trescia "Kurs ALX wiele mnie uczy".

const addTextButton = document.querySelector('#btn2');
const body = document.querySelector('body');

addTextButton.addEventListener('click', (event) => {
  event.preventDefault();
  body.innerHTML += '<p> Kurs ALX wiele mnie uczy. </p>'
})

// 3. Za pomoca JS, dodaj do wszystkich elementow h1, klase .warning. Dodaj w CSS obsluge klasy, zeby tekst z ta klasa byl czerwony

const allHeadings = document.querySelectorAll('h1');

allHeadings.forEach(heading => {
  heading.classList.add('warning');
})