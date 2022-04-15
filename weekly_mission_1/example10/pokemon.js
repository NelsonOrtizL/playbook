// Exportación con NOMBRE
export class Pokemon {
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log(`Mi Pokemon ${this.name} te saluda!!!`);
    }

    sayMessage(message){
        console.log(`Mi Pokemon ${this.name} dice: ${message}`)
    }
}

// Exportación POR DEFECTO
export default class Pokemon_2 {
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log(`Mi Pokemon ${this.name} te saluda!!!`);
    }

    sayMessage(message){
        console.log(`Mi Pokemon ${this.name} dice: ${message}`)
    }
}
