"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const profile_routers_1 = __importDefault(require("./routers/profile.routers"));
const database_1 = require("./utils/database");
const user_routers_1 = __importDefault(require("./routers/user.routers"));
const content_routers_1 = __importDefault(require("./routers/content.routers"));
var database = new database_1.Database();
app.use('/users', user_routers_1.default);
app.use('/profiles', profile_routers_1.default);
app.use('/Contenido', content_routers_1.default);
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send(`hl`);
    res.end();
});
app.listen(4000, function () {
    console.log('servidor levantado');
});
