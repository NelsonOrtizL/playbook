import Explorer from './explorer.js'

export default class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission) // Constructor de la clase Explorer
    this.cycle = cycle // Atributo propio de la clase Viajero
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() // Recuperamos el método de la clase Padre
    return `${nameAndUsername}, Ciclo ${this.cycle}` // Concatenamos un valor al resultado de la función padre
  }
}