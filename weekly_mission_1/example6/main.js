// Modificación de clases

require('./patcher') // Llamas este módulo que modifica el objeto instanciado
const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado

logger.customMessage() // Llamamos a el método de la clase modificado

logger.Logger.getHello(); // Método creado para obtener el nombre del objeto instanciado

console.log("Mostramos los métodos y atributos del objeto instanciado");
console.log(logger);

console.log('El contenido de la clase');
console.log(logger.Logger);