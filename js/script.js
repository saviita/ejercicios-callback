//EJERCICIOS
console.log('_______');

//EJ1 Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array
const numbersMultiply = numbers => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};
numbersMultiply([2, 5, 3, 4, 1, 6]);

//EJ2 Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2
const dividedNumbers = numbers => {
  const result = numbers.map((number, index) => {
    return number / (index + 2);
  });

  console.log(result);
};
dividedNumbers([2, 5, 3, 4, 1, 6]);

//EJ3 Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas
const lowerCaseWords = words => {
  const upperCaseWords = words.map(word => {
    return word.toUpperCase();
  });

  console.log(upperCaseWords);
};
lowerCaseWords(['laura', 'patricia', 'césar', 'adrian', 'carlos']);

//EJ4 Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide
const getWordsLetter = (words, letter) => {
  const finalArray = words.filter(word => {
    return word.startsWith(letter);
  });

  if (finalArray.length === 0) {
    console.log(`No hay ninguna palabra que empiece por ${letter}`);
  }

  console.log(finalArray);
};
getWordsLetter(['laura', 'patricia', 'césar', 'adrian', 'Carlos'], 'c');

//EJ5 Añade a la función anterior lo necesario para que funcione independientemente de mayusculas o minúsculas
const getWordsLetter2 = (words, letter) => {
  const finalArray = words.filter(word => {
    return word.toLowerCase().startsWith(letter.toLowerCase());
  });

  if (finalArray.length === 0) {
    console.log(`No hay ninguna palabra que empiece por ${letter}`);
  }

  console.log(finalArray);
};
getWordsLetter2(['laura', 'patricia', 'césar', 'adrian', 'Carlos'], 'c');

//EJ6 Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array
const getTenNumbers = tenNumbers => {
  const result = tenNumbers.reduce((total, number) => {
    return total + number;
  });

  console.log(result);
};
getTenNumbers([20, 5, 33, 4, 1, 6, 12, 54, 32, 17]);

//EJ7 Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//  "Número: 2 - Cuadrado: 4 - Cubo: 8"
const tenNumbers = numbers => {
  numbers.forEach(number => {
    console.log(`Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`);
  });
};
tenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

//EJ8 Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula
const getWord = word => {
  const wordUpperCase = word.split('').reduce((finalWord, letter) => {
    const vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    if (vowels.includes(letter)) {
      return finalWord + letter.toUpperCase();
    }
    return finalWord + letter;
  });

  console.log(wordUpperCase);
};
getWord('mapache');

//EJ9 Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola
const tenNumbersArray = tenNumbers => {
  const randomNumber = Math.floor(Math.random() * 10);

  const arrayResult = tenNumbers.map(number => {
    return number * randomNumber;
  });
  const even = arrayResult.filter(number => number % 2 === 0);
  const odd = arrayResult.filter(number => number % 2 !== 0);

  console.log(tenNumbers, even, odd);
};
tenNumbersArray([20, 5, 33, 4, 1, 6, 12, 54, 32, 17]);

//EJ10 Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']. Si te quedas atascado puedes investigar la función flatMap() y flat()
const getFiveWords = fiveWords => {
  const lettersUpperCase = fiveWords.flatMap(word => {
    return [word.charAt(0).toUpperCase(), word.charAt(word.length - 1).toUpperCase()];
  });
  console.log(lettersUpperCase);
};
getFiveWords(['hola', 'adios', 'gato', 'perro', 'casa']);

//EJ11 Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5
const numberHigher = tenNumbers => {
  const result = tenNumbers.some(number => {
    return number > 5;
  });
  console.log(result);
};
numberHigher([20, 5, 33, 4, 1, 6, 12, 54, 32, 17]);

//EJ12 Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']
const getWordsNumber = (words, number) => {
  const wordsLength = words.filter(word => {
    return word.length === number;
  });

  console.log(wordsLength);
};
getWordsNumber(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

//EJ13 Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número
const NumbersAndNumber = (numbers, uniqueNumber) => {
  const dividers = numbers.filter(number => {
    return number % uniqueNumber === 0;
  });

  console.log(dividers);
};
NumbersAndNumber([20, 5, 33, 4, 1, 6, 12, 54, 32, 17], 2);

//EJ14 Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
//const array = [
//  { name: 'John', age: 25 },
//  { name: 'Jane', age: 30 },
//  { name: 'Bob', age: 20 }
//];
const userAge = array => {
  const age = array.filter(users => {
    return users.age < 30;
  });

  console.log(age);
};
userAge([
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
]);

//EJ15 Crea una función que reciba un array relleno con números y te diga si todos son pares o no
const arrayNumbers = numbers => {
  const even = numbers.every(number => {
    return number % 2 === 0;
  });

  console.log(even);
};
arrayNumbers([2, 4, 6]);

//EJ16 Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor
const orderWords = words => {
  const order = words.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(order);
};

//EJ17 Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse() 😊 (investiga la función reduceRight)
const reverseWord = word => {
  const finalWord = word.split('').reduceRight((acc, letter) => {
    return acc + letter;
  });
};

//EJ18 RETO Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]
const fiveNumbers = numbers => {
  /*const numbersString = numbers.toString();
  const sumNumbers = numbersString.map(number => {
    return number(number.charAt(0)) + number(number.charAt(1));
  });*/

  const sumArray = numbers.map(numbers => {
    const stringNumbers = String(number);
    const sum = stringNumbers.split('').reduce((acc, number) => acc + number, 0);
  });

  console.log(sumNumbers);
};
fiveNumbers([21, 34, 87, 10, 28]);

//EJ19 Utilizando el array que te dejo a continuación resuelve estos dos retos.
const users = [
  {
    id: 'user001',
    name: 'Juan',
    surname: 'Pérez',
    age: 30
  },
  {
    id: 'user002',
    name: 'María',
    surname: 'González',
    age: 25
  },
  {
    id: 'user003',
    name: 'Pedro',
    surname: 'Sánchez',
    age: 35
  },
  {
    id: 'user004',
    name: 'Ana',
    surname: 'Martínez',
    age: 28
  },
  {
    id: 'user005',
    name: 'Luis',
    surname: 'López',
    age: 40
  }
];

//   Crea una función que reciba un criterio de ordenación y ordene el array en base a ese criterio. Puede ser el nombre, el apellido o la edad.
const orderArrayByCondition = condition => {
  if (condition === 'age') {
    users2.sort((a, b) => a.age - b.age);
  } else if (condition === 'name') {
    users2.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    users2.sort((a, b) => a.surname.localeCompare(b.surname));
  }
};

//   Crea una función que reciba un id de usuario y borre ese usuario del array.
