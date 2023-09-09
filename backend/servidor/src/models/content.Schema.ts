import mongoose from "mongoose";
import { Categorias } from "./content.model";

const schema =new mongoose.Schema<Categorias>({
    'nombreCategoria':String,
    "descripcion":String,
    "color":String,
    "icono":String,
    'empresas':Array<Number>



}) 
export const contentSchema= mongoose.model('Categorias',schema);