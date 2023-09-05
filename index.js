//primer ejercicio:
/*1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.*/
const parOImpar = (a) => {
  if (a % 2 == 0) {
    console.log("el numero " + a + " es par");
  } else if (a % 1 == 0) {
    console.log("el numero " + a + " es impar");
  }
};
parOImpar(5);
/* 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
 */

const num = (a, b) => {
  if (a > b) {
    console.log(a + " es mayor que " + b);
  } else if (a < b) {
    console.log(b + " es mayor que " + a);
  } else if ((a = b)) {
    console.log(b + " es igual que " + a);
  }
};

num(2, 2);

/*3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. */

const Multiplo5 = (a) => {
  if (a % 5 == 0) {
    console.log("el numero " + a + " es multiplo de 5");
  } else {
    console.log("el numero " + a + " no es multiplo de 5");
  }
};
Multiplo5(5);

/* 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número. */
const numerito = 6;

for (let i = 0; i <= numerito; i++) {
  console.log(i);
}

/*5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.*/

const sumatoria = (palabra, numero) => {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
};

sumatoria("toria", 5);
/*6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array. */
const rutaNucba = [
  1,
  "DiseñoWeb",
  2,
  "Javascript",
  3,
  "ReactJS",
  4,
  "Back End",
];

for (let i = 0; i < rutaNucba.length; i++) {
  console.log(typeof rutaNucba[i]);
}

/*
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
*/

const numeroMas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(numeroMas[i]);
}

/* 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. */

const numero = [1, 2, 3, 4, 5];
const numeroMultiplicador = 5;

function multiplicar(arreglo, numero) {
  for (let i = 0; i < arreglo.length; i++) {
    const resultado = arreglo[i] * numero;
    console.log(resultado);
  }
}
multiplicar(numero, numeroMultiplicador);
