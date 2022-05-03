console.log("Objeto con método que recibe parámetros");

// Ejemplo 1: Objeto con método que recibe parámetros
const myPet = {
    name: "Woopa",
    
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 1: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Tulio")