"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
}
addTwo(5);
getUpper('pegu');
signUpUser('pegu', 'pegu@gmail.com', true);
loginUser('pegu', 'pegu@gmail');
