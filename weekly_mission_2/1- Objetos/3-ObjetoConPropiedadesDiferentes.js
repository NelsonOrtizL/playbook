console.log("Creando un objeto con diferentes propiedades");

// Ejemplo 1: Objeto con diferentes propiedades
const myObject = {
    name: "Tulio",
    age: 2,
    nicknames: [
     "Tulipán",
      "Tulancingo",
      "Tulish"
    ],
    address: {
      zip_code: "10000",
      street: "Dr. Vertiz 11 Benito Juarez",
      city: "CDMX"
    }
  }

  console.log("Ejemplo 1: Objeto con diferentes propiedades")
  console.log(myObject); // Mostrando el objeto con sus propiedades
  console.log(myObject.name); // Mostrando el valor del atributo "name"
  console.log(myObject["address"]); // Mostrando el objeto "address" que contiene el objeto "myObject"