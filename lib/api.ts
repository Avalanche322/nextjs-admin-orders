import {Cart, Order} from "@/types";

export async function getOrdersWithTotal(): Promise<Order[]> {
    const res = await fetch("https://fakestoreapi.com/carts", { cache: "no-store" });
    const orders: Cart[] = await res.json();

    const productMap = new Map<number, number>();
    const fetchProduct = async (id: number) => {
        if (!productMap.has(id)) {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" });
            const data = await res.json();
            productMap.set(id, data.price);
        }
        return productMap.get(id)!;
    };

    return await Promise.all(
        orders.map(async (order: Cart) => {
            let total = 0;
            for (const item of order.products) {
                const price = await fetchProduct(item.productId);
                total += price * item.quantity;
            }
            return { ...order, total };
        })
    );
}

export async function getOrderDetail(id: number) {
    const res = await fetch(`https://fakestoreapi.com/carts/${id}`, { cache: "no-store" });
    const order: Cart = await res.json();

    if (!order) return null;

    const productDetails = await Promise.all(
        order.products.map(async (p) => {
            const res = await fetch(`https://fakestoreapi.com/products/${p.productId}`, { cache: "no-store" });
            const data = await res.json();
            return { id: p.productId, title: data.title, price: data.price, quantity: p.quantity };
        })
    );

    const total = productDetails.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return { ...order, products: productDetails, total };
}