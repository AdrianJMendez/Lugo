import express from "express";
const router= express.Router();
//http://localhost:4000/categorias
import { obtenerCategorias } from "../controllers/content.controllers";
router.get('/categorias',obtenerCategorias);

export default router;