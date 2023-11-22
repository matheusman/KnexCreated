import { Router } from "express";
import routerUsers from "./UsersRouter.routes";

const router = Router();

router.use('/', routerUsers)

export default router;