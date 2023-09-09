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
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCategorias = void 0;
const content_Schema_1 = require("../models/content.Schema");
const obtenerCategorias = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allcontent = yield content_Schema_1.contentSchema.find();
            res.send(allcontent);
        }
        catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Ocurrió un error al obtener usuarios.');
        }
    });
};
exports.obtenerCategorias = obtenerCategorias;
