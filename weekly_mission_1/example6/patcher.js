/*
 * Ten en cuenta:
 *    - require('./logger') te dará el objeto creado
 *    - require('./logger').Logger te regresará la clase
 *
 * En este caso estamos agregando una función más al objeto instanciado, no a la clase.
 * */
require('./logger').customMessage = function () { //Le Agregamos un nuevo método al objeto sin haber modificado la clase padre
    console.log('This is a new functionality')
}

const myClase = require('./logger').Logger;

myClase.getHello = function (){
    console.log('Hello, i am a message');
}
// Agregamos un nuevo método a la clase
// require('./logger').Logger.getName = function () {
//     console.log(`My name is [ Prueba]`);
// }
