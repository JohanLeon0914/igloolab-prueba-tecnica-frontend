"use client";
import { useRouter } from "next/navigation";
import ProductForm from "./ProductForm";
import { Product } from "../types/product";
import axios from "axios";

interface UpdateProductInterface {
  product: Product;
}

interface UpdatedProduct {
  name: string;
  description: string;
  price: number;
  image: string;
}

const UpdateProduct = ({ product }: UpdateProductInterface) => {
  const router = useRouter();

  const handleUpdateProduct = async (updatedProduct: UpdatedProduct) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}`,
        updatedProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      router.push(`/product/${product.id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductForm
        initialData={product}
        onSubmit={handleUpdateProduct}
        isEditMode={true}
      />
    </div>
  );
};

export default UpdateProduct;
