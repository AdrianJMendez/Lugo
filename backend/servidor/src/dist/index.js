"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var profile_routers_1 = require("./routers/profile.routers");
var database_1 = require("./utils/database");
var user_routers_1 = require("./routers/user.routers");
var content_routers_1 = require("./routers/content.routers");
var database = new database_1.Database();
app.use('/users', user_routers_1["default"]);
app.use('/profiles', profile_routers_1["default"]);
app.use('/Contenido', content_routers_1["default"]);
app.use(express_1["default"].json());
app.get('/', function (req, res) {
    res.send('servidor de prueba vete a dormir');
    res.end();
});
app.listen(4000, function () {
    console.log('servidor levantado');
});
