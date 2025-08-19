"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Objetos
// const batimovil = {
//   carroceria: "Negra",
//   modelo: "6x6",
//   antibalas: true,
//   pasajeros:4
// };
const batimovil = {
    bodywork: "Black",
    model: "6x6",
    bulletproof: true,
    passengers: 4
};
// const bumblebee = {
//   carroceria: "Amarillo con negro",
//   modelo: "4x2",
//   antibalas: true,
//   pasajeros:4,
//   disparar(){ // El metodo disparar es opcional
//     console.log("Disparando");
//   }
// };
const bumblebee = {
    bodywork: "Yello with Black",
    model: "4x2",
    bulletproof: true,
    passengers: 4,
    shoot() { console.log("shooting"); }
};
console.log(`batimovil: `, batimovil);
console.log(`bumblebee: `, bumblebee);
// // Villanos debe de ser un arreglo de objetos personalizados
// const villanos = [{
//   nombre:"Lex Luthor",
//   edad: 54,
//   mutante:false
// },{
//   nombre: "Erik Magnus Lehnsherr",
//   edad: 49,
//   mutante: true
// },{
//   nombre: "James Logan",
//   edad: undefined,
//   mutante: true
// }];
let villains = [
    { name: 'Lex Luyhor', age: 54, mutant: false },
    { name: 'Erik Magnus Lehnsherr', age: 49, mutant: true },
    { name: 'James Logan', mutant: true }
];
console.log(`villianins: `, villains);
const charles = {
    power: "psiquico",
    stature: 1.78
};
const apocalipsis = {
    leader: true,
    members: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(`apocalipsis: `, apocalipsis);
console.log(`charles: `, charles);
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
// console.log(mystique);
mystique = charles;
console.log(`mystique: `, mystique);
mystique = apocalipsis;
console.log(`mystique: `, mystique);
