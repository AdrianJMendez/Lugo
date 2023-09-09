"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenercontenidocontinue = exports.obtenerlistafavorita = exports.agregarcontenidoperfil = exports.obtenerperfil = void 0;
const obtenerperfil = function (req, res) {
    res.send('obtener este es un perfil por id' + ' ' + req.params.id);
    res.end();
};
exports.obtenerperfil = obtenerperfil;
const agregarcontenidoperfil = function (req, res) {
    res.send('Agregar contenido al arreglo del perfil');
    res.end();
};
exports.agregarcontenidoperfil = agregarcontenidoperfil;
const obtenerlistafavorita = function (req, res) {
    res.send('esta es tu lista favorita');
    res.end();
};
exports.obtenerlistafavorita = obtenerlistafavorita;
const obtenercontenidocontinue = function (req, res) {
    res.send('Aqui esta el contenido a continuar de ver');
    res.end();
};
exports.obtenercontenidocontinue = obtenercontenidocontinue;
