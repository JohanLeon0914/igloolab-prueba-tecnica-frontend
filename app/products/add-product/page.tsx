"use client"
import { useRouter } from 'next/navigation';
import ProductForm from '../../components/ProductForm';
import axios from 'axios';

export default function AddProductPage() {
  const router = useRouter();

  const handleSubmit = async (product: { name: string; description: string; price: number; image: string }) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, product, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Agregar Nuevo Producto</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}