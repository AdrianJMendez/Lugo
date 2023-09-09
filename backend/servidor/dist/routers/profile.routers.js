"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//http://localhost:300/profiles/:id
const profile_controllers_1 = require("../controllers/profile.controllers");
router.get('/:id', profile_controllers_1.obtenerperfil);
//http://localhost:300/profiles/:id/agregarC  (Metodo PUT/POST)
const profile_controllers_2 = require("../controllers/profile.controllers");
router.put('/:id/agregarC', profile_controllers_2.agregarcontenidoperfil);
//http:localhost:3000/profiles/:id/milista
const profile_controllers_3 = require("../controllers/profile.controllers");
router.get('/:id/milista', profile_controllers_3.obtenerlistafavorita);
const profile_controllers_4 = require("../controllers/profile.controllers");
router.get('/:id/continue', profile_controllers_4.obtenercontenidocontinue);
exports.default = router;
