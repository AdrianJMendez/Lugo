"use strict";
exports.__esModule = true;
exports.contentSchema = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1["default"].Schema({
    'nombreCategoria': String,
    "descripcion": String,
    "color": String,
    "icono": String,
    'empresas': Array()
});
exports.contentSchema = mongoose_1["default"].model('Categorias', schema);
