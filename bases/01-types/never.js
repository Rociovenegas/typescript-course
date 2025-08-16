"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const abc = (msg) => {
        throw new Error(msg);
    };
    console.log(abc('test'));
})();
