//Importación con NOMBRE
import {Pokemon} from './pokemon.js'

const pikachu = new Pokemon('Pikachu')
pikachu.sayHello()

// Importación por DEFAULT, permite cambiar el nombre del objeto o elemento exportado en el contexto de importación
import myPokemon from './pokemon.js';
const pikachu_2 = new myPokemon('Pikachu_2');
pikachu_2.sayHello();