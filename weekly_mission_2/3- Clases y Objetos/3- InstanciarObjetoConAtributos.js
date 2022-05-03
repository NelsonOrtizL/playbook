// Ejemplo 3: Instanciar un objeto con atributos

// El método constructor es una palabra reservada y es recomendable usarla
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
  }
  
  // Crear un objeto de la clase Student (esto se le llama instantiation)
  const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"])
  console.log("Ejemplo 3: Instanciar un objeto con atributos")
  console.log(carloStudent)