// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){ return num * num})
// También puedes escribir la función como fat arrow
//const numbersSquare = numbers4.map((num) => return num * num)
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)