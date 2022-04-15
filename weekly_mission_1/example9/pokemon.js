class Pokemon {
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

module.exports = Pokemon;

// Esto también se puede indicar de la siguiente forma
// module.exports = {
//     Pokemon     
// };