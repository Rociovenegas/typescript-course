"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, lastName) => {
        return ` ${firstName} ${lastName || ''} `;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
