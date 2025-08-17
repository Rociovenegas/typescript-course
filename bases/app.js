"use strict";
// Funciones Básicas
// function sumar( a, b ){
//   return a + b;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const sumar = (a, b) => a + b;
const sumarTest = sumar(5, 6);
console.log(sumarTest);
// const contar = ( heroes ) => {
//   return heroes.length;
// }
const contar = (heroes) => heroes.length;
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
const contarTest = contar(superHeroes);
console.log(contarTest);
//Parametros por defecto
// const llamarBatman = ( llamar ) => {
//   if( llamar ){
//     console.log("Batiseñal activada");
//   }
// }
const llamarBatman = (llamar = false) => llamar ? console.log("Batiseñal!") : console.log("No Batiseñal :c");
llamarBatman();
llamarBatman(true);
// Rest?
// const unirheroes = ( personas ) => {
//   return personas.join(", ");
// }
const unirheroes = (...heroes) => {
    return heroes.join(", ");
};
const unirTest = unirheroes("Flash", "Arrow", "Superman", "Linterna Verde");
console.log(`unirTest: ${unirTest}`);
// Tipo funcion
// const noHaceNada = ( numero, texto, booleano, arreglo )=> {}
const printNumber = (a) => console.log(`printNumber: ${a}`);
const printString = (text) => console.log(`printText: ${text}`);
const printBoolean = (someBoolean) => console.log(`printboolean: ${someBoolean}`);
const printArray = (someArray) => console.log(`printArray: ${someArray}`);
let myFunctionNumber;
let myFunctionString;
let myFunctionBoolean;
let myFunctionArray;
myFunctionNumber = printNumber;
myFunctionString = printString;
myFunctionBoolean = printBoolean;
myFunctionArray = printArray;
myFunctionNumber(5);
myFunctionString('Hello');
myFunctionBoolean(true);
myFunctionArray(['Hello', 'Kittens']);
// // Crear el tipo de funcion que acepte la funcion "noHaceNada"
// let noHaceNadaTampoco;
// noHaceNadaTampoco = noHaceNada
