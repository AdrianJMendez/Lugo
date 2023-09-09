"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/*
export class Database{
    server:string ='localhost';
    port:string='27017';
    db:string='Lugo';
    constructor(){
    //cadena de conexion
    mongoose.connect('mongodb://localhost:27017/Lugo')
    .then(()=>{
        console.log('se conecto a mongo');
    }).catch((error)=>{
        console.error('ocurrio un error al concetarse',error);
    })
}
}*/
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default
            .connect('mongodb+srv://Cronoscar:oscar@cluster0.5vbyhxu.mongodb.net/Lugo') //Asincrona
            .then(result => console.log('Se conecto a mongodb'))
            .catch(error => console.log(error));
    }
}
exports.Database = Database;
