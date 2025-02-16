/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
 return x === y;

}
console.log(sonIguales(5, 4));

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   return str1.length === str2.length;
}

console.log(tienenMismaLongitud('cris', 'crist')); // Esto imprimirá 'false' en la consola.


function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   return num < 90;
}
console.log(menosQueNoventa(35));

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   return num > 50;
}
console.log(mayorQueCincuenta(555));

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   return num %2 ===0;
}
console.log(esPar(8));

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   return num %2===1;
}
console.log(esImpar(3));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
