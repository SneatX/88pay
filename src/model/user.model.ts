import database from '../config/db';
import { RowDataPacket } from 'mysql2';
import {User} from '../config/definitions'

export default class UsersModel {
    async getAll(): Promise<User[]> {
        try {
            const [users] = await database.query<User[] & RowDataPacket[]>('SELECT * FROM users');
            return users;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users from database');
        }
    }

    async getOne(id: string): Promise<User>{
        try{
            const [user] = await database.query<User & RowDataPacket[]>('SELECT * FROM users WHERE id = ?', [id]);
            return user;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Failed to fetch users from database');
        }
    }

    async create(user: User): Promise<User>{
        try{
            const [createdUser] = await database.query<User & RowDataPacket[]>('INSERT INTO users SET ?', user);
            return createdUser;
        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Failed to create user in database');
        }
    }
}
