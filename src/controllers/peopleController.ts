import { peopleServices } from "../services/peopleService";
import { Request, Response } from "express";
import httpStatus from "http-status";


export async function getPeople(req: Request, res: Response){
    const people = (await peopleServices.selectPeople()).rows[0]
    return res.status(httpStatus.OK).send(people)
}