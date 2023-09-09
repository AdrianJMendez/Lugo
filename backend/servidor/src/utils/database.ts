import { error } from "console";
import mongoose from  "mongoose";
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
export class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect('mongodb+srv://Cronoscar:oscar@cluster0.5vbyhxu.mongodb.net/Lugo') //Asincrona
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
}
