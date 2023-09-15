import { peopleRepository } from "../repositories/peopleRepository";

async function selectPeople(){
    const count = await peopleRepository.countPeople()
    const peopleQtd: number = count.rows[0].qtd
    const randomId: number = Math.floor(Math.random() * (peopleQtd)) + 1
    return await peopleRepository.select(randomId)
}

export const peopleServices = {selectPeople}