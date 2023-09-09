"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
//metodos hppt
//http://users/login
var user_controllers_1 = require("../controllers/user.controllers");
router.post('/login', user_controllers_1.login);
var user_controllers_2 = require("../controllers/user.controllers");
//http://localhost:3000/users
router.get('/:id', user_controllers_2.obtenerusuario);
//router.get(`/:id/lista`, obtenerlistausuario);
// con exporte default Podemos ponerle otro nombre al momento de exportarlo 
var user_controllers_3 = require("../controllers/user.controllers");
router.get('/', user_controllers_3.obtenerallusers);
var user_controllers_4 = require("../controllers/user.controllers");
router.post('/guardar', user_controllers_4.guardarusuario);
exports["default"] = router;
