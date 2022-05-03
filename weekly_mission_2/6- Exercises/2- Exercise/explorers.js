const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

//0.- Mostrar objeto explore
console.log(explorers);

//1.- Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach(explorer => {
    console.log(`Hola ${explorer.name} un gusto saludarte`);
});

//2.- Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(explorer => {
    console.log(`Hola ${explorer.name} un gusto saludarte`);
    console.log(`Tu Stack es ${explorer.stack}`);
});

//3.- Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const list_stacks = explorers.map((explorer) => explorer.stack);
console.log("Ejemplo 3: Crea una nueva lista con las listas de stacks de cada explorer");
console.log(list_stacks);

//4.- Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const list_explorers = explorers.filter((explorer) => // esta es una función
  explorer.stack.includes('js') // indicación para solo filtrar elementos que incluyan "js"
)
console.log("Ejemplo 4: Obtén la lista de explores que tengan en su stack js")
console.log(list_explorers);

//5.- Busca el primer explorer que sea de la CDMX, usa FIND
const cdmx_explorer = explorers.find((explorer) => explorer.city == "CDMX");
console.log(cdmx_explorer);

//6.- Obtén la suma de todos los exercises_completed, usa REDUCE
const suma_excercises_completed = explorers.reduce((acc, element) => acc + element.exercises_completed, 0);
console.log(suma_excercises_completed);

//7.- Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const areSomeTrue = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log("Ejemplo 7: Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true: " + areSomeTrue) //true

//8.- Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const areAllFinished = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true); // every
console.log("Ejemplo 8: Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true: " + areAllFinished);
