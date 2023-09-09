import mongoose, { ObjectId } from "mongoose";

export interface Usuarios{
    
    "idUsuario":Number;
    "nombre":String;
    "apellido":String;
    "ordenes"?:Array<any>;


}