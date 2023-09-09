import mongoose from "mongoose";
import { Usuarios } from "./user.model";
export declare const usuarioSchema: mongoose.Model<Usuarios, {}, {}, {}, mongoose.Document<unknown, {}, Usuarios> & Usuarios & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<Usuarios, mongoose.Model<Usuarios, any, any, any, mongoose.Document<unknown, any, Usuarios> & Usuarios & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Usuarios, mongoose.Document<unknown, {}, Usuarios> & Usuarios & {
    _id: mongoose.Types.ObjectId;
}>>;
