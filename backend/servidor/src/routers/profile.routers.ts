import express from 'express'

import {Request, Response } from 'express';
const router = express.Router();
//http://localhost:300/profiles/:id
import { obtenerperfil } from '../controllers/profile.controllers';
router.get('/:id',obtenerperfil);
//http://localhost:300/profiles/:id/agregarC  (Metodo PUT/POST)
import { agregarcontenidoperfil } from '../controllers/profile.controllers';
router.put('/:id/agregarC',agregarcontenidoperfil);
//http:localhost:3000/profiles/:id/milista
import { obtenerlistafavorita } from '../controllers/profile.controllers';
router.get('/:id/milista',obtenerlistafavorita);
import { obtenercontenidocontinue } from '../controllers/profile.controllers';
router.get('/:id/continue',obtenercontenidocontinue);

export default router;