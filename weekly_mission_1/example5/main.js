// Clases y Objetos

const logger = require('./logger') //Importamos nuevamente un modulo

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')

// La forma de instanciar un nuevo objeto cambia porque lo que se trae "logger" es un objeto ya instanciado y para crear
// Otro este debe de ejecutar el método constructor
const miCuenta = new logger.constructor("Invitado"); 
miCuenta.log('Hola soy un nuevo objeto');

/*
También pueden instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/
