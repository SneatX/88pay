type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

type Product = {
    id: string,
    name: string,
    price: number,
    createdBy: string
}

type Order = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    createdAt: string
}

export { User, Product, Order }