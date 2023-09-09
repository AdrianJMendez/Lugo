import exp from "constants";
import { Request, Response } from "express";
 import { contentSchema } from "../models/content.Schema";
export const obtenerCategorias= async function(req:Request,res:Response){

    try {
        const allcontent = await contentSchema.find();
        res.send(allcontent);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send('Ocurrió un error al obtener usuarios.');
    }    

}