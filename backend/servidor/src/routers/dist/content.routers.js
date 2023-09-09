"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
//http://localhost:4000/categorias
var content_controllers_1 = require("../controllers/content.controllers");
router.get('/categorias', content_controllers_1.obtenerCategorias);
exports["default"] = router;
