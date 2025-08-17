"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const fullName = (firstName, upper = false, lastName) => {
        if (upper)
            return ` ${firstName} ${lastName || ''}`.toUpperCase();
        return ` ${firstName} ${lastName || ''} `;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
