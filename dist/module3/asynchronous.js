"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return yield response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getToDo();
    console.log(result);
});
getToDo();
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "data ";
        if (data) {
            resolve(data);
        }
    });
};
const makePromiseBoolean = () => {
    return new Promise((resolve, reject) => {
        const data = false;
        if (data) {
            resolve(data);
        }
    });
};
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "new data" };
        if (data) {
            resolve(data);
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
});
const getPromiseDataBoolena = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
});
const getPromiseDataObj = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    return data;
});
