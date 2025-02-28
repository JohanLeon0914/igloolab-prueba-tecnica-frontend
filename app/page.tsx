"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import { Product } from "./types/product";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error al obtener productos", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Toaster />
      <ProductList products={products} />
    </div>
  );
}
