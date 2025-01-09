import { Order } from '../config/definitions';
import OrderModel from '../model/order.model';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

const orderController = new OrderModel();

export default class OrderController {
    static async getAll(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return
        }
        
        let orders = await orderController.getAll();
        res.status(200).json(orders);
    }

    static async getOne(req: Request, res: Response) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return
        }

        let id = req.params.id;
        let order = await orderController.getOne(id);
        res.status(200).json(order);
    }

    static async createOrder(req: Request, res: Response): Promise<void> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return
        }
        let order: Order = req.body;
        let createdOrder = await orderController.create(order);
        res.status(201).json(createdOrder);
    }

    static async getOrderWithProductAndUserData(req: Request, res: Response): Promise<void> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return
        }
        let id = req.params.id;
        let order = await orderController.getOrderWithProductAndUserData(id);
        res.status(200).json(order);
    }
}