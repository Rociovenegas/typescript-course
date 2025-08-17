"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const helloCats = () => `Hello cats!`;
    let myFunction;
    //* myFunction = 10;
    //* console.log(myFunction)
    // myFunction = addNumbers
    // console.log( myFunction(1, 2) )
    //? myFunction = greet
    //? console.log( myFunction( 'Fernando' ) )
    myFunction = helloCats;
    console.log(myFunction());
})();
