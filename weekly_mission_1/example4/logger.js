class Logger {
  //Se crea un constructor - ES PALABRA RESERVADA
  constructor(name) {
    // this es una variable para referencias el valor del contexto local de esta clase
    this.name = name // Estás variables se le conocen como atributos
  }

  // método
  // this.name es la variable que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar este método
  info (message) {
    console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
  }

  // método
  verbose (message) {
    console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
  }
}

// Esta clase se exporta en este módulo
// Si no se indica esta linea, no se comportaría como modulo
module.exports = Logger
