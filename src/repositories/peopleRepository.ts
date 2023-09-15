import { db } from "../database/databaseConnection";

function countPeople(){
    return db.query(`SELECT COUNT(id) as "qtd" FROM people`)
}

function select(id: number){
    return db.query(`SELECT * FROM people WHERE id=$1`, [id])
}

export const peopleRepository = {countPeople, select}