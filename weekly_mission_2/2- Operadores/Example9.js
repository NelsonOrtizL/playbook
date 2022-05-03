/*
La función .reduce() te será útil para tomar todos los elementos de una lista, 
aplicar una función a cada uno de ellos y acumular el resultado en un valor de salida. 
La principal diferencia con la función map() es que ésta siempre va a devolver un nuevo Array. 
Sin embargo, como verás, reduce() es más flexible.
*/

/*
La forma en que opera es muy similar al cadena de montaje. Por ejemplo, de un coche. 
El primer operario atornilla las puertas, cuando termina el segundo las pinta, el tercero pone las ruedas. 
Pero cada uno empieza a trabajar en el coche después de que el anterior haya hecho su trabajo con él. 
Al final de la cadena, tienes el coche completamente montado.

Ya que guardar el elemento anterior y el actual, lo que te permite operar con estos. Comparando dos valores a la vez
*/

// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]                                          //Este 0 es un valor inicial
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)