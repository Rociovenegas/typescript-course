"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const batman = 'Batman';
    const greenLantern = "Green Lantern";
    const spederman = `Héroe: Sperderman`;
    console.log(`I'm ${batman} `);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || 'Not present');
})();
