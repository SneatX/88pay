import database from '../config/db';
import { RowDataPacket } from 'mysql2';
import { Order } from '../config/definitions'

export default class OrderModel {
    async getAll(): Promise<Order[]> {
        try {
            const [Orders] = await database.query<Order[] & RowDataPacket[]>('SELECT * FROM orders');
            return Orders;
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw new Error('Failed to fetch orders from database');
        }
    }

    async getOne(id: string): Promise<Order> {
        try {
            const [Order] = await database.query<Order & RowDataPacket[]>('SELECT * FROM orders WHERE id = ?', [id]);
            return Order;
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw new Error('Failed to fetch orders from database');
        }
    }

    async create(order: Order): Promise<Order> {
        try {
            const [createdOrder] = await database.query<Order & RowDataPacket[]>('INSERT INTO orders SET ?', order);
            return createdOrder;
        } catch (error) {
            console.error('Error creating orders:', error);
            throw new Error('Failed to create orders in database');
        }
    }

    async getOrderWithProductAndUserData(id: string): Promise<Order> {
        try {
            const [Order] = await database.query<Order & RowDataPacket[]>(`
                SELECT 
                    Orders.id AS orderId,
                    Orders.quantity,
                    Orders.createdAt AS orderDate,
                    Users.id AS userId,
                    Users.name AS userName,
                    Users.email AS userEmail,
                    Products.id AS productId,
                    Products.name AS productName,
                    Products.price
                FROM 
                    Orders
                INNER JOIN 
                    Users ON Orders.userId = Users.id
                INNER JOIN 
                    Products ON Orders.productId = Products.id
                WHERE 
                    Orders.id = ?;
            `, [id]);
            return Order;
        } catch (error) {
            console.error('Error fetching Order with product and user data:', error);
            throw new Error('Failed to fetch Order with product and user data from database');
        }
    }

    async getOrdersOfUser(id: string): Promise<Order[]> {
        try {
            const [Orders] = await database.query<Order[] & RowDataPacket[]>(`
                SELECT 
                    Orders.id AS orderId,
                    Orders.quantity,
                    Orders.createdAt AS orderDate,
                    Products.id AS productId,
                    Products.name AS productName,
                    Products.price
                FROM 
                    Orders
                LEFT JOIN 
                    Products ON Orders.productId = Products.id
                WHERE 
                    Orders.userId = ?;
            `, [id]);
            return Orders;
        } catch (error) {
            console.error('Error fetching Orders of user:', error);
            throw new Error('Failed to fetch Orders of user from database');
        }
    }
}
