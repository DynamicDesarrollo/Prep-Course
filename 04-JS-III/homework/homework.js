// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  const arreglo = array;
  return arreglo[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  const arreglo = array;
  var indice = arreglo.length - 1;
  return arreglo[indice];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  const arreglo = array;
  return arreglo.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  var arreglo = array;
  for (var i = 0; i <= arreglo.length - 1; i++) {
    arreglo[i] = arreglo[i] + 1;
  }
  return arreglo;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  var arreglo = array;
  arreglo.push(elemento);
  return arreglo;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  var arreglo = array;
  arreglo.unshift(elemento);
  return arreglo;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  var arreglo = palabras;
  arreglo = arreglo.join(' ');
  return arreglo;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  var arreglo = array;
  var valor;
  valor = arreglo.includes(elemento);
  return valor;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  var arreglo = numeros;
  var Total = 0;
  for (var i = 0; i <= arreglo.length - 1; i++) {
    Total = Total + arreglo[i];
  }
  return Total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  var arreglo = resultadosTest;
  var promedio = 0;
  for (var i = 0; i <= arreglo.length - 1; i++) {
    promedio = promedio + arreglo[i];
  }
  promedio = promedio / arreglo.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  var arreglo = numeros;
  var NumMayor = 0;
  for (var i = 0; i <= arreglo.length - 1; i++) {
    if (arreglo[i] > NumMayor) {
      NumMayor = arreglo[i];
    }
  }
  return NumMayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  var producto = 1;
  if (arguments.length !== 0) {
    for (var i = 0; i <= arguments.length - 1; i++) {
      producto = producto * arguments[i];
    }
  } else {
    producto = 0;
  }
  return producto;
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  var arra = arreglo;
  var cantidad = 0;
  for (var i = 0; i <= arra.length - 1; i++) {
    if (arra[i] > 18) {
      cantidad = cantidad + 1;
    }
  }
  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  var str;
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    str = 'Es fin de semana';
  } else {
    str = 'Es dia Laboral';
  }
  return str;


}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  var valor;
  valor = n.toString().startsWith(9);
  return valor;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  var compara = arreglo[0];
  for (var i = 0; i <= arreglo.length - 1; i++) {
    if (arreglo[i] === compara) {
      continue;
    } else {
      return false;
    }
  }
  return true;

}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  var arreglo = array;
  var meses = ["Enero", "Marzo", "Noviembre"]
  var nuevoArreglo = [];
  for (var j = 0; j <= arreglo.length - 1; j++) {
    for (var i = 0; i <= meses.length - 1; i++) {
      if (arreglo[j] === meses[i]) {
        nuevoArreglo.push(meses[i]);
      }
    }
  }
  if (nuevoArreglo.length === 3) {
    return nuevoArreglo;
  } else {
    return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  var arreglo = array;
  var nuevoArreglo = [];
  for (var i = 0; i <= arreglo.length - 1; i++) {
    if (arreglo[i] > 100 && arreglo[i] <= 200) {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  var arreglo = [];
  var n = numero * 10;
  numero = numero + 2;
  for (var i = numero; i <= n; i++) {
    numero = numero + 2;
    arreglo.push(numero);
    if (numero === n) {
      break;
    }
  }
  return arreglo;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  function continueStatement(numero) {
    var arreglo = [];
    var n = numero * 10;
    var cant = 0;
    numero = numero + 2;
    for (var i = numero; i <= n; i++) {
      numero = numero + 2;
      cant = cant + 1;
      if (cant === 5) {
        continue;
      } else {
        arreglo.push(numero);
      }
    }
    return arreglo;
  }
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
