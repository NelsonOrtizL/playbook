// Creación de clase
class Logger {
  constructor (name) {
    this.count = 0
    this.name = name
  }

  // Creación de método
  log (message) {
    this.count++
    console.log('[' + this.name + '] ' + message)
  }
}

module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
module.exports.Logger = Logger // Clase
