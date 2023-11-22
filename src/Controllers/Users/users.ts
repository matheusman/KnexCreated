import { Request, Response } from "express";

export const findAll = (req : Request, res : Response) => {
    const users = [{
        name : 'jhon'
    }]
    res.send(users)
}

export const create = (req : Request, res : Response) => {
    res.status(201).json(req.body);
}