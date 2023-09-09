"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemas = new mongoose_1.default.Schema({
    "idUsuario": Number,
    "nombre": String,
    "apellido": String,
    "ordenes": (Array),
});
exports.usuarioSchema = mongoose_1.default.model('usuarios', schemas);
