import { Request, Response } from "express";
import dataSource from "../../database/data-source";

export const findAll = async (req : Request, res : Response) => {
    const users = await dataSource('users').select()
    res.status(200).send(users)
}

export const create = async (req : Request, res : Response) => {
    const user = await dataSource('users').insert(req.body, '*')
    res.status(201).json(user[0]);
}