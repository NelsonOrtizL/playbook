console.log("Objeto con métodos")

// Ejemplo 1: Objeto con métodos
const pet = {
    name: "Nelson",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
      // this.name hace referencia a la propiedad del objeto
      console.log(`${this.name} te saluda en español!`)
    }
  }
  
  console.log("Ejemplo 1: Objeto con métodos")
  pet.sayHello()