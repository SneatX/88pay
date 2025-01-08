import {User} from '../config/definitions';
import UsersModel from '../model/user.model';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

const usersModel = new UsersModel();

export default class UserController{
    static async getAll(req: Request, res: Response){
        let users = await usersModel.getAll(); 
        res.status(200).json(users);
    }

    static async getOne(req: Request, res: Response){
        let id = req.params.id;
        let user = await usersModel.getOne(id);
        res.status(200).json(user);
    }

    static async createUser(req: Request, res: Response): Promise<void>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.status(400).json({ errors: errors.array() });
            return
        } 

        let user: User = req.body;
        user.createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
        let createdUser = await usersModel.create(user);
        res.status(201).json(createdUser);
    }
}