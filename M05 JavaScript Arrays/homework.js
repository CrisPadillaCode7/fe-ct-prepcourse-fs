/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Verificar si el arreglo no está vacío
   if (array.length > 0) {
     return array[0]; // Devolver el primer elemento
   } else {
     return null; // Retornar null si el arreglo está vacío
   }
 }
 

 function devolverUltimoElemento(array) {
   // Verificar si el arreglo no está vacío
   if (array.length > 0) {
     return array[array.length - 1]; // Devolver el último elemento
   } else {
     return null; // Retornar null si el arreglo está vacío
   }
 }
 
 function obtenerLargoDelArray(array) {
   return array.length;
 }
 
 function incrementarPorUno(array) {
   return array.map(elemento => elemento + 1);
 }
 
 function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return array;
 }
 
 function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return array;
 }
 
 function dePalabrasAFrase(palabras) {
   return palabras.join(' ');
 }
 
 function arrayContiene(array, elemento) {
   return array.includes(elemento);
 }
 
 function agregarNumeros(arrayOfNums) {
   return arrayOfNums.reduce((total, num) => total + num, 0);
 }
 
 function promedioResultadosTest(resultadosTest) {
   const sum = resultadosTest.reduce((total, num) => total + num, 0);
   return sum / resultadosTest.length;
 }
 
 function numeroMasGrande(arrayOfNums) {
   return Math.max(...arrayOfNums);
 }
 
 function multiplicarArgumentos() {
   if (arguments.length === 0) return 0;
   let result = 1;
   for (let i = 0; i < arguments.length; i++) {
     result *= arguments[i];
   }
   return result;
 }
 
 function cuentoElementos(array) {
   return array.filter(elemento => elemento > 18).length;
 }
 
 function diaDeLaSemana(numeroDeDia) {
   if (numeroDeDia === 1 || numeroDeDia === 7) {
     return 'Es fin de semana';
   } else {
     return 'Es dia laboral';
   }
 }
 
 function empiezaConNueve(num) {
   return num.toString().startsWith('9');
 }
 
 function todosIguales(array) {
   return array.every(elemento => elemento === array[0]);
 }
 
 function mesesDelAño(array) {
   const mesesBuscados = ['Enero', 'Marzo', 'Noviembre'];
   const mesesEncontrados = array.filter(mes => mesesBuscados.includes(mes));
 
   if (mesesEncontrados.length === 3) {
     return mesesEncontrados;
   } else {
     return 'No se encontraron los meses pedidos';
   }
 }
 
 function tablaDelSeis() {
   const tabla = [];
   for (let i = 0; i <= 10; i++) {
     tabla.push(6 * i);
   }
   return tabla;
 }
 
 function mayorACien(array) {
   return array.filter(elemento => elemento > 100);
 }
 
 function breakStatement(num) {
   const result = [];
   let value = num;
 
   for (let i = 0; i < 10; i++) {
     value += 2;
     result.push(value);
 
     if (value === i) {
       return 'Se interrumpió la ejecución';
     }
   }
 
   return result;
 }
 
 function continueStatement(num) {
   const result = [];
   let value = num;
 
   for (let i = 0; i < 10; i++) {
     if (i === 5) {
       continue;
     }
 
     value += 2;
     result.push(value);
   }
 
   return result;
 }
 
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
