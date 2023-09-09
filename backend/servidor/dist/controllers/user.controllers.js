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
exports.guardarusuario = exports.obtenerallusers = exports.obtenerlistausuario = exports.obtenerusuario = exports.login = void 0;
const user_Schema_1 = require("../models/user.Schema");
//aqui van todas las funciones que se definan en los 
//endpoints
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('login esta funcionando adecuadamente');
    res.end();
});
exports.login = login;
const obtenerusuario = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_Schema_1.usuarioSchema.find({ idUsuario: req.params.id });
            res.send(user[0]);
            res.end();
        }
        catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Ocurrió un error al obtener usuarios.');
        }
    });
};
exports.obtenerusuario = obtenerusuario;
const obtenerlistausuario = function (req, res) {
    res.send('estas son las lista de perfiles del usuario' + req.params.id);
    res.end();
};
exports.obtenerlistausuario = obtenerlistausuario;
const obtenerallusers = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allusers = yield user_Schema_1.usuarioSchema.find();
            res.send(allusers);
            res.end();
        }
        catch (error) {
            console.error('Error al obtener usuarios:', error);
            res.status(500).send('Ocurrió un error al obtener usuarios.');
        }
    });
};
exports.obtenerallusers = obtenerallusers;
const guardarusuario = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuarioNuevo = req.body;
        try {
            const usuarioGuardado = yield user_Schema_1.usuarioSchema.create(usuarioNuevo);
            res.send(usuarioGuardado);
            res.end();
        }
        catch (error) {
            console.log('fallo', error);
        }
    });
};
exports.guardarusuario = guardarusuario;
