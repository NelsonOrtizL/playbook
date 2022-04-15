// logger.js

/*
Exportacion:
  Nombrada: Estableces que se debe usar el mismo nombre que declaraste para tu objeto o metodo, cuando alguien importe tu clase o documento
  Por defecto: Es todo lo contrario, solo puede hacers 1 vez y puedes indicar algun otro nombr para hacer referencia a algun metodo importado
*/

// Esta es una función que se guardara en este módulo como info
// Ademas le indicamos a JavaScript que sera exporta de forma nombrada
// Ejemplo de funcion Flecha
exports.info = (message) => {
  console.log(`info: ${message}`)
}

// Esta es una función que se guardara en este módulo como verbose
// Ademas le indicamos a JavaScript que sera exporta de forma nombrada
// Ejemplo de funcion Flecha
exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */
