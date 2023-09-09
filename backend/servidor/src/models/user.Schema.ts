import mongoose from "mongoose";
import { Usuarios } from "./user.model";
 const schemas=new mongoose.Schema<Usuarios>({
  
    "idUsuario":Number,
    "nombre":String,
    "apellido":String,
    "ordenes":Array<any>,

});
export const usuarioSchema=mongoose.model('usuarios',schemas);