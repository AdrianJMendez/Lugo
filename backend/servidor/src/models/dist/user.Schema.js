"use strict";
exports.__esModule = true;
exports.usuarioSchema = void 0;
var mongoose_1 = require("mongoose");
var schemas = new mongoose_1["default"].Schema({
    "idUsuario": Number,
    "nombre": String,
    "apellido": String,
    "ordenes": Array < any > 
});
exports.usuarioSchema = mongoose_1["default"].model('usuarios', schemas);
