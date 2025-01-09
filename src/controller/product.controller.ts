import {Product} from '../config/definitions';
import ProductModel from '../model/product.model';
import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

const productModel = new ProductModel();

export default class ProductController{
    static async getAll(req: Request, res: Response){
        let products = await productModel.getAll(); 
        res.status(200).json(products);
    }

    static async getOne(req: Request, res: Response){
        let id = req.params.id;
        let user = await productModel.getOne(id);
        res.status(200).json(user);
    }

    static async createProduct(req: Request, res: Response): Promise<void>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.status(400).json({ errors: errors.array() });
            return
        } 
        let product: Product = req.body;
        let createdProduct = await productModel.create(product);
        res.status(201).json(createdProduct);
    }

    static async getProductWithUserData(req: Request, res: Response): Promise<void>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.status(400).json({ errors: errors.array() });
            return
        } 
        let id = req.params.id;
        let product = await productModel.getProductWithUserData(id);
        res.status(200).json(product);
    }
}