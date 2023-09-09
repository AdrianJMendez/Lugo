"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//http://localhost:4000/categorias
const content_controllers_1 = require("../controllers/content.controllers");
router.get('/categorias', content_controllers_1.obtenerCategorias);
exports.default = router;
