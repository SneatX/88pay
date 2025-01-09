# 88pay

Prueba tecnica para la empresa 88pay donde se desarrollo un API REST utilizando TypeScript, Node.js, y MySQL
la api es compatible con un servidor comun y corriente de nodemon y un entorno emulado de aws lambda utilizando serverless-offline con serverless-http

# Postman

[End Points](https://documenter.getpostman.com/view/39402248/2sAYQUpE8Y)

## instalar dependencias

```
npm install
```

## crear base de datos

Se creo un endpoint para crear la base de datos, se debe llamar en la ruta /seed o copiar el contenido del archivo seed.sql que se encuentra en la carpeta scripts

## iniciar servidor con nodemon 

```
npm run dev 
```

## iniciar servidor con serverless

```
serverless offline
```

