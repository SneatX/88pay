import database from '../config/db';
import { RowDataPacket } from 'mysql2';
import { Order } from '../config/definitions'

export default class OrderModel {
    async getAll(): Promise<Order[]> {
        try {
            const [Orders] = await database.query<Order[] & RowDataPacket[]>('SELECT * FROM pedido');
            return Orders;
        } catch (error) {
            console.error('Error fetching pedido:', error);
            throw new Error('Failed to fetch pedido from database');
        }
    }

    async getOne(id: string): Promise<Order> {
        try {
            const [Order] = await database.query<Order & RowDataPacket[]>('SELECT * FROM pedido WHERE id = ?', [id]);
            return Order;
        } catch (error) {
            console.error('Error fetching pedido:', error);
            throw new Error('Failed to fetch pedido from database');
        }
    }

    async create(order: Order): Promise<Order> {
        try {
            const [createdOrder] = await database.query<Order & RowDataPacket[]>('INSERT INTO pedido SET ?', order);
            return createdOrder;
        } catch (error) {
            console.error('Error creating pedido:', error);
            throw new Error('Failed to create pedido in database');
        }
    }
}
