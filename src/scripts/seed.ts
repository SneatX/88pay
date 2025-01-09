import mysql from 'mysql2/promise';
import envData from '../config/env';
import { Request, Response } from 'express';

const setupDatabase = async ( req: Request, res: Response ) => {
  const connection = await mysql.createConnection({
    host: envData.db_host,
    user: envData.db_user,
    password: envData.db_password,
  });

  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS test_88pay;`);
    await connection.query(`USE test_88pay;`);
    console.log('Base de datos creada.');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        createdBy INT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (createdBy) REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId INT NOT NULL,
        productId INT NOT NULL,
        quantity INT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE
      );
    `);
    console.log('Tablas creadas.');

    await connection.query(`
      INSERT INTO users (name, email) VALUES
      ('John Doe', 'john.doe@example.com'),
      ('Jane Smith', 'jane.smith@example.com'),
      ('Alice Johnson', 'alice.johnson@example.com');
    `);

    await connection.query(`
      INSERT INTO products (name, price, createdBy) VALUES
      ('Laptop', 1200.00, 1),
      ('Smartphone', 800.00, 2),
      ('Headphones', 150.00, 1);
    `);

    await connection.query(`
      INSERT INTO orders (userId, productId, quantity) VALUES
      (1, 2, 1),
      (2, 1, 2),
      (3, 3, 3);
    `);
    console.log('Datos insertados correctamente.');
    res.status(200).json({ message: 'Base de datos creada.' });
  } catch (error) {
    console.error('Error configurando la base de datos:', error);
  } finally {
    await connection.end();
  }
};

export default setupDatabase;