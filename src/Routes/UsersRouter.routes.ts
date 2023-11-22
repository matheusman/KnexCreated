import { Router, Response, Request } from 'express';
import { create, findAll } from '../Controllers/Users/users';
const routerUsers = Router();

routerUsers.get('/users', findAll)
routerUsers.post('/users', create)

export default routerUsers;