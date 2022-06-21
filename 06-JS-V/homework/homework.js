// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }
  Usuario.prototype.saludar = function () {
    return console.log('Hola, mi nombre es ' + this.nombre);
  };
  var usuario1 = new Usuario(opcion = { usuario: 'sbeta', nombre: 'Sirjhan', email: 's@gmail.com', password: 123 });
  return usuario1;

}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  Constructor.prototype.saludar = function () {
    return console.log('Hello World');
  };
  var saludar = new Constructor();
  return saludar.saludar();

}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  function Reverse(cadena) {
    this.cadena = cadena;
  }
  Reverse.prototype.reverse = function () {
    var recibirCadena = this.cadena.split("");
    var invertirCadena = recibirCadena.reverse();
    var cadenaInervtida = invertirCadena.join("");

    return console.log(cadenaInervtida);
  };
  var invertida = new Reverse('cadena');
  return invertida.reverse();

}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    // Crea el constructor:
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
    this.detalle = function () {
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domcilio: this.domicilio
      };
    };
  }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var persona = new Persona(nombre, apellido, edad, dir);
  return persona
}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){
    return (this.nombre +', '+this.edad +' Años');
  }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
