
// Este es un objeto llamado Logger
class Logger {
  constructor(name){// Este es su constructor
    // Al crear este objeto se guardarán estos valores
    this.count = 0    //Valor inicializado
    this.name = name  // Nombre que nosostros le asignemos
  }

  // Metodo que manipula los datos del contexto local (Variabls o atributos declarados en la creacion del objeto)
  log(message) {
    this.count++ // se aumenta el contador interno al llamar este método
    console.log('[' + this.name + '] ' + message)
  }
}

// Esta es la diferencia con el codigo anterior, ya que en este modulo estamos exportando LA CLASE Logger PERO ADEMAS
// EXPORTAMOS UN OBJETO DE DICHA CLASE, de esta forma ya puedes hacer uso de los metodos y atributos
module.exports = new Logger('DEFAULT') // Instanciación del objeto y se exporta
