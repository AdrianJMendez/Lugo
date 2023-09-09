
import express from 'express';
import { Request,Response } from 'express';
const router= express.Router();
//metodos hppt
//http://users/login
import { login } from '../controllers/user.controllers';
router.post('/login',login);
import { obtenerusuario } from '../controllers/user.controllers';
//http://localhost:3000/users

router.get('/:id',obtenerusuario)

//obtener listaa de un usuario en particular 
//http://localhost:3000/profiles/usuario/listas
import { obtenerlistausuario } from '../controllers/user.controllers';
//router.get(`/:id/lista`, obtenerlistausuario);


// con exporte default Podemos ponerle otro nombre al momento de exportarlo 
import { obtenerallusers } from '../controllers/user.controllers';
router.get('/',obtenerallusers);
import { guardarusuario } from '../controllers/user.controllers';

router.post('/guardar', guardarusuario);
export default router;