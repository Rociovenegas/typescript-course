"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // getName?: Function          
    let flash = {
        name: 'Barry',
        age: 24,
        powers: ['super speed', 'time travel'],
    };
    if (flash.getName)
        console.log(flash.getName());
    flash = {
        name: 'Clark',
        age: 60,
        powers: ['super strength'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName?.());
    let flash2 = {
        name: 'Barry',
        age: 24,
        powers: ['super speed', 'time travel'],
    };
})();
