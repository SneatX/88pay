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

    async getProductWithUserData(id: string): Promise<Product> {
        try {
            const [Product] = await database.query<Product & RowDataPacket[]>(`
                SELECT 
                    Products.id AS productId,
                    Products.name AS productName,
                    Products.price,
                    Users.id AS userId,
                    Users.name AS userName,
                    Users.email AS userEmail
                FROM 
                    Products
                INNER JOIN 
                    Users ON Products.createdBy = Users.id
                WHERE 
                    Products.id = ?;
            `, [id]);
            return Product;
        } catch (error) {
            //console.error('Error fetching Product with user data:', error);
            throw new Error('Failed to fetch Product with user data from database');
        }
    }

    async getProductsWithFilter(filter: string): Promise<Product[]> {
        try {
            const [Products] = await database.query<Product[] & RowDataPacket[]>(`
                SELECT 
                    id AS productId,
                    name AS productName,
                    price
                FROM 
                    Products
                ORDER BY 
                    ${filter} ASC;

            `);
            return Products;
        } catch (error) {
            console.error('Error fetching Products with filter:', error);
            throw new Error('Failed to fetch Products with filter from database');
        }
    }
}
