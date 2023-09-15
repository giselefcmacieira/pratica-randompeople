import { Router } from "express";
import peopleRouter from "./peopleRoute";


const router = Router();

router.use(peopleRouter)

export default router