import mongoose from "mongoose";
import { Categorias } from "./content.model";
export declare const contentSchema: mongoose.Model<Categorias, {}, {}, {}, mongoose.Document<unknown, {}, Categorias> & Categorias & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<Categorias, mongoose.Model<Categorias, any, any, any, mongoose.Document<unknown, any, Categorias> & Categorias & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Categorias, mongoose.Document<unknown, {}, Categorias> & Categorias & {
    _id: mongoose.Types.ObjectId;
}>>;
