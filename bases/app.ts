// Funciones Básicas
// function sumar( a, b ){
//   return a + b;
// }

const sumar = (a: number, b: number ): number =>  a + b;
const sumarTest = sumar( 5 ,6 );
console.log(sumarTest);
// const contar = ( heroes ) => {
//   return heroes.length;
// }

const contar = ( heroes: string[] ): number => heroes.length;
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
const contarTest = contar(superHeroes);
console.log(contarTest);


//Parametros por defecto
// const llamarBatman = ( llamar ) => {
//   if( llamar ){
//     console.log("Batiseñal activada");
//   }
// }

const llamarBatman = ( llamar:boolean = false ): void =>  llamar? console.log("Batiseñal!"): console.log("No Batiseñal :c");

llamarBatman();
llamarBatman(true);

// Rest?
// const unirheroes = ( personas ) => {
//   return personas.join(", ");
// }

const unirheroes = ( ...heroes: string[] ): string => {
    return heroes.join(", ");
}

const unirTest: string = unirheroes("Flash", "Arrow", "Superman", "Linterna Verde");
console.log(`unirTest: ${unirTest}`);

// Tipo funcion
// const noHaceNada = ( numero, texto, booleano, arreglo )=> {}
// creo que no entedi bien el ejercicio pero si lo que se queria estudiar con el ejercicio xd
const printNumber = ( a: number ):void => console.log(`printNumber: ${a}`);
const printString = ( text: string ):void => console.log(`printText: ${text}`); 
const printBoolean = ( someBoolean:boolean ):void => console.log(`printboolean: ${someBoolean}`);
const printArray = ( someArray: string[] ):void => console.log(`printArray: ${someArray}`);

let myFunctionNumber: ( x:number ) => void;
let myFunctionString: ( x:string ) => void;
let myFunctionBoolean: ( x:boolean ) => void;
let myFunctionArray: ( x:string[] ) => void;

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
