// Exportando funciones entre scripts con CommonJS
// node main.js

// Es una importacion de tipo tipo nombrada - lo qu implica que para usar los elemntos, se deben instanciar con el mismo nombre que tienen en el documeento origen
const logger = require('./logger') //Importamos el documento con sus objetos y metodos

logger.info('This is an informational message'); //Hacemos uso del metodo de la clase importada
logger.verbose('This is a verbose message')
