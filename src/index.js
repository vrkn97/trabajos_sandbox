/**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
let array = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100
];

/**
 * Y el siguiente indice:
 */

let indice = 1;

/**
 * La funcion debera mostrar por consola el numero 6.
 */

// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

const algoritmo = (a, b) => {
  console.log(a[b]);
};
algoritmo(array, indice);
