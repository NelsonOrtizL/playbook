/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

//  Muy similar a crear una funcion anonima, una funcion default o incluso un constructor
module.exports = (message) => {
  console.log(`info: ${message}`)
}
