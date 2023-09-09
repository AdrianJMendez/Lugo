import express, {Request,Response, Express} from 'express';
const app:Express=express();

import { profile } from 'console';
import profileRouters from './routers/profile.routers'
import { Database } from './utils/database';
import UsersRouters from './routers/user.routers';
import contentRouters from './routers/content.routers'
var database:Database= new Database();
app.use('/users',UsersRouters);
app.use('/profiles',profileRouters);
app.use('/Contenido',contentRouters);
app.use(express.json());

app.get('/', function(req:Request, res:Response){
    res.send(`hl`);
    res.end();

})
app.listen(4000,function(){
    console.log('servidor levantado');
})