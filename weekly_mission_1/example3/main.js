/*
  Diferentes formas de exportar funciones

  node main.js
*/

const logger1 = require('./logger_1') // Realizamos la importacion de un modulo
const logger2 = require('./logger_2') // Realizamos la importacion de un modulo

logger1('This is an informational message') // Hacemos uso de un metodo del modulo importado
logger2.verbose('This is a verbose message') // Hacemos uso de un metodo del modulo importado
