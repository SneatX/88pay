import database from '../config/db';
import { RowDataPacket } from 'mysql2';
import { Product } from '../config/definitions'

export default class ProductModel {
    async getAll(): Promise<Product[]> {
        try {
            const [Products] = await database.query<Product[] & RowDataPacket[]>('SELECT * FROM products');
            return Products;
        } catch (error) {
            console.error('Error fetching Products:', error);
            throw new Error('Failed to fetch Products from database');
        }
    }

    async getOne(id: string): Promise<Product> {
        try {
            const [Product] = await database.query<Product & RowDataPacket[]>('SELECT * FROM products WHERE id = ?', [id]);
            return Product;
        } catch (error) {
            console.error('Error fetching Products:', error);
            throw new Error('Failed to fetch Products from database');
        }
    }

    async create(Product: Product): Promise<Product> {
        try {
            const [createdProduct] = await database.query<Product & RowDataPacket[]>('INSERT INTO products SET ?', Product);
            return createdProduct;
        } catch (error) {
            console.error('Error creating Product:', error);
            throw new Error('Failed to create Product in database');
        }
    }
}
