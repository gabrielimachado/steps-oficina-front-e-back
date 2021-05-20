import { materiaRouter } from "./materias";
import { userRouter } from "./user";
import { authRouter } from '../middleware/auth'
import { notaRouter } from "./notas";

const routes = [userRouter, materiaRouter, authRouter, notaRouter]

export { routes }