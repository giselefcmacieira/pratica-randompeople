
import { getPeople } from "../controllers/peopleController";
import { Router } from "express";


const peopleRouter = Router();

peopleRouter.get('/people', getPeople)

export default peopleRouter