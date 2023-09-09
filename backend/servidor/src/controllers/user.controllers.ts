import { Request,Response } from "express"
import {usuarioSchema} from "../models/user.Schema";
import mongoose from "mongoose";
import { Usuarios } from "../models/user.model";
//aqui van todas las funciones que se definan en los 
//endpoints

export const login=  async(req:Request,res:Response)=>{
res.send('login esta funcionando adecuadamente');
res.end();
}

export const obtenerusuario= async function(req:Request,res:Response){
      try {
        const user = await usuarioSchema.find({idUsuario:req.params.id});
        res.send(user[0]);
        res.end();
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send('Ocurrió un error al obtener usuarios.');
    }

    
}
export const obtenerlistausuario = function(req:Request,res:Response){
    res.send('estas son las lista de perfiles del usuario'+ req.params.id);
    res.end();
    
}

export const obtenerallusers = async function (req: Request, res: Response) {
    try {
        const allusers = await usuarioSchema.find();
        res.send(allusers);
        res.end();
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).send('Ocurrió un error al obtener usuarios.');
    }
};

export const guardarusuario = async function (req: Request, res: Response) {
    
  const usuarioNuevo: Usuarios=req.body;
  try{
        const usuarioGuardado=await usuarioSchema.create(usuarioNuevo);
        
        res.send(usuarioGuardado);
        res.end();
       
  }catch(error){
    console.log('fallo', error);
   
  }
};