/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/


   function esPositivo(num) {
      // La función recibe un entero. Devuelve como resultado un string que indica si el número
      // es positivo o negativo.
      // Si el número es positivo ---> "Es positivo".
      // Si el número es negativo ---> "Es negativo".
      // Si el número es 0, devuelve false.
      // Tu código:
      if (num > 0){
         return "Es positivo";
      }else if (num < 0){
         return "Es negativo";
      }
      else {
      return false;
   }
    }


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return str + "!";

}
console.log(agregarSimboloExclamacion("Hola mundo"));

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return nombre + " " + apellido;
}
console.log(combinarNombres("cris", + "padilla"));

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return "Hola " + nombre + "!";
}
console.log(obtenerSaludo("Martin"));

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   return alto * ancho; // Multiplica alto por ancho y retorna el resultado
}

console.log(obtenerAreaRectangulo(5, 10)); // Esto imprimirá '50' en la consola.


function retornarPerimetro(lado) {
   // Retornar el perímetro de un cuadrado teniendo la medida de su lado.
   return 4 * lado; // Multiplica la longitud del lado por 4 y retorna el resultado
}

console.log(retornarPerimetro(5)); // Esto imprimirá '20' en la consola.


function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   return (base * altura) / 2; // Multiplica base por altura y divide por 2, luego retorna el resultado
}

console.log(areaDelTriangulo(10, 5)); // Esto imprimirá '25' en la consola.

function deEuroAdolar(euro) {
   var tasaDeCambio = 1.20; // 1 euro equivale a 1.20 dólares
   return euro * tasaDeCambio; // Convierte euro a dólar y retorna el resultado
}

console.log(deEuroAdolar(5)); // Esto imprimirá '6' en la consola.

function esVocal(letra) {
   // Verifica si 'letra' tiene más de un caracter o no es una vocal.
   if (letra.length !== 1 || !'aeiouAEIOU'.includes(letra)) {
       return "Dato incorrecto";
   }
   // Verifica si 'letra' es una vocal.
   return "Es vocal";
}

console.log(esVocal("a")); // Esto imprimirá 'Es vocal' en la consola.
console.log(esVocal("b")); // Esto imprimirá 'Dato incorrecto' en la consola.
console.log(esVocal("ae")); // Esto imprimirá 'Dato incorrecto' en la consola.


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
