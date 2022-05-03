// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand);
const countriesEndsByia = countries7.filter((country) => 
  country.endsWith('y') // Función que revisa un string y lo filtra si termine con la cadena recibida como parámetro
)
console.log("Ejemplo 7: Paises que terminan en y");
console.log(countriesEndsByia);