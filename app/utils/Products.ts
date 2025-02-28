import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error getting product:", error);
        throw new Error("Could not get the product");
    }
}

export async function getProduct(id: string) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error getting product:", error);
        throw new Error("Could not get the product");
    }
}