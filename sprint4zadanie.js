//Podstawy funkcji w JavaScript.

// Wyświetl wyniki w konsoli

//PODSTAWY FUNKCJI:

// 1. Napisz funkcję dodającą dwie liczby
function sum(x, y) {
  return x + y;
}

// 2. Napisz funkcję zwracającą długość tablicy
function arrayLength(array) {
  return array.length;
}

// 3. Napisz funkcję sprawdzającą, czy liczba jest parzysta
function isNumberEven(number) {
  return number % 2 === 0;
}

// 4. Napisz funkcję obliczającą pole kwadratu
function squareArea(a) {
  return a * a;
}

// 5. Napisz funkcję zwracającą odwrotność liczby
function inverseNumber(number) {
  return -number;
}

// 6. Napisz funkcję konwertującą stopnie Celsjusza na Fahrenheita
function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// 7. Napisz funkcję zwracającą pierwszy element tablicy
function firstArrayElement(array) {
  return array[0];
}

// 8. Napisz funkcję łączącą dwa ciągi znaków, utwórz warunek który sprawdzi czy argumenty są typu string
function attachStrings(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    return string1 + string2;
  } else {
    return "Kazdy z argumentów powinien być typu string";
  }
}

// 9. Napisz funkcję zwracającą typ zmiennej
function checkTheType(variable) {
  return typeof variable;
}

// 10. Napisz funkcję zwracającą absolutną wartość liczby
function absoluteValue(number) {
  return Math.abs(number);
}

//PODSTAWY PĘTLI:

// 1. Napisz funkcję, która będzie miała pętlę for, która wyświetli liczby od 1 do 10
function numbers1To10() {
  for (i = 1; i < 11; i++) {
    console.log(i);
  }
}

// 2. Napisz funkcję, która będzie używać pętli while do wyświetlenia liczb parzystych mniejszych od 20
function evenNumbersLessThan20() {
  let num = 0;
  while (num < 20) {
    if (num % 2 === 0) {
      console.log(num);
    }
    num++;
  }
}

// 3. Napisz funkcję, która użyje pętli do while do wyświetlenia liczb od 10 do 1
function showNumbersFrom10To1() {
  let number = 10;
  do {
    console.log(number);
    number--;
  } while (number >= 1);
}

// 4. Napisz funkcję, która użyje pętli while i break do przerwania pętli po osiągnięciu liczby 5
function countUntil5() {
  let i = 0;
  while (true) {
    console.log(i);
    i++;
    if (i === 6) {
      break;
    }
  }
}

// 5. Napisz funkcję, która użyje pętli for in do iteracji po właściwościach obiektu
function objectInteration(object) {
  for (let property in object) {
    console.log(`${property} is ${object[property]}`);
  }
}

// 6. Napisz funkcję, która użyje pętli for of do iteracji po elementach tablicy
function tableIteration(table) {
  for (let color of table) {
    console.log(color);
  }
}

// 7. Napisz funkcję, która użyje pętli for do obliczania sumy elementów tablicy
function tableElementsSum(table) {
  let summary = 0;
  for (let i = 0; i < table.length; i++) {
    summary = summary + numbers[i];
  }
  return summary;
}

// 8. Napisz funkcję, która użyje pętli while do odwrócenia ciągu znaków
function charactersReversal(element) {
  let reversed = "";
  let i = element.length - 1;
  while (i >= 0) {
    reversed = reversed + element[i];
    i--;
  }
  return reversed;
}
// 9. Napisz funkcję, która użyje pętli for of do znalezienia największej liczby w tablicy
function findBiggestNumber(table) {
  let biggest = table[1];
  for (let element of table) {
    if (element > biggest) {
      biggest = element;
    }
  }
  return biggest;
}

// 10. Napisz funkcję, która użyje pętli for in do wyświetlenia par klucz-wartość tablicy obiektów
function display(table) {
  let index = 1;
  for (element of table) {
    console.log(`Object ${index}`);
    for (property in element) {
      console.log(`${property} - ${element[property]}`);
    }
    index++;
  }
}

//PODSTAWOWE METODY NA TABLICACH:

// 1. Napisz funkcję, która doda element na koniec tablicy używając metody push
function addElementAtTheEnd(table, element) {
  table.push(element);
  return table;
}

// 2. Napisz funkcję, która usunie ostatni element tablicy używając metody pop
function deleteLastElement(table) {
  table.pop();
  return table;
}

// 3. Napisz funkcję, która usunie pierwszy element tablicy używając metody shift
function deleteFirstElement(table) {
  table.shift();
  return table;
}

// 4. Napisz funkcję, która doda element na początek tablicy używając metody unshift
function addElementAtTheBeginning(table, element) {
  table.unshift(element);
  return table;
}

// 5. Napisz funkcję, która użyje metody push, aby dodać dwa elementy na koniec tablicy
function add2ElementsAtTheEnd(table, element1, element2) {
  table.push(element1, element2);
  return table;
}

// 6. Napisz funkcję, która dwukrotnie użyje metody pop, aby usunąć dwa ostatnie elementy tablicy
function delete2LastElements(table) {
  table.pop();
  table.pop();
  return table;
}

// 7. Napisz funkcję, która dwukrotnie użyje metody shift, aby usunąć dwa pierwsze elementy tablicy
function delete2FirstElements(table) {
  table.shift();
  table.shift();
  return table;
}

// 8. Napisz funkcję, która dwukrotnie użyje metody unshift, aby dodać dwa elementy na początek tablicy
function add2ElementsAtTheBeginning(table, element1, element2) {
  table.unshift(element1);
  table.unshift(element2);
  return table;
}

// 9. Napisz funkcję, która użyje metody push do dodania elementu, a następnie metody pop do usunięcia elementu z tablicy
function addAndDeleteLastELement(table, element1) {
  table.push(element1);
  table.pop();
  return table;
}

// 10. Napisz funkcję, która użyje metody unshift do dodania elementu, a następnie metody shift do usunięcia elementu z tablicy
function addAndDeleteFirstElement(table, element1) {
  table.unshift(element1);
  table.shift();
  return table;
}

// 11. Napisz funkcję, która przy użyciu metody map zwiększy każdy element tablicy o 1
function incrementEachElementBy1(table) {
  return table.map(function (currentValue) {
    return currentValue + 1;
  });
}

// 12. Napisz funkcję, która przy użyciu metody filter zwróci tylko parzyste liczby z tablicy
function returnOnlyEven(table) {
  return table.filter(function (currentValue) {
    return currentValue % 2 === 0;
  });
}

// 13. Napisz funkcję, która przy użyciu metody map podwoi każdy element tablicy
function dubleEachElement(table) {
  return table.map(function (currentValue) {
    return currentValue * 2;
  });
}

// 14. Napisz funkcję, która przy użyciu metody filter zwróci elementy tablicy większe niż 10
function greaterThan10(table) {
  return table.filter(function (currentValue) {
    return currentValue > 10;
  });
}

// 15. Napisz funkcję, która przy użyciu metody split podzieli podany ciąg znaków na słowa
function divideIntoWords(text) {
  return text.split(` `);
}

// 16. Napisz funkcję, która przy użyciu metody map zamieni każdy element tablicy na jego długość
function changeElementToLength(table) {
  return table.map(function (currentValue) {
    if (typeof currentValue === "string") {
      return currentValue.length;
    } else {
      return currentValue.toString().length;
    }
  });
}

// 17. Napisz funkcję, która przy użyciu metody filter zwróci tylko nieparzyste liczby z tablicy
function returnOnlyOdd(table) {
  return table.filter(function (currentValue) {
    return currentValue % 2 !== 0;
  });
}

// 18. Napisz funkcję, która przy użyciu metody map zwróci kwadraty każdego elementu tablicy
function squaresOfEachElement(table) {
  return table.map(function (currentValue) {
    return currentValue ** 2;
  });
}

// 19. Napisz funkcję, która przy użyciu metody filter zwróci tylko te słowa z ciągu znaków, które mają więcej niż 3 litery
function wordsWithMoreThan3Letters(text) {
  let words = text.split(" ");
  return words.filter(function (currentValue) {
    return currentValue.length > 3;
  });
}

// 20. Napisz funkcję, która przy użyciu metody map zwróci każdy element tablicy zapisany wielkimi literami
function capitalLetters(table) {
  return table.map(function (currentValue) {
    const letters = currentValue.split("");
    const capitalLetter = letters.shift().toUpperCase() + letters.join("");
    return capitalLetter;
  });
}
