/* eslint-disable @next/next/no-img-element */
"use client";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import toast, { Toaster } from "react-hot-toast";
import { Product } from "../types/product";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

interface ProductProps {
  product: Product;
}

const SingleProduct = ({ product }: ProductProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.name.substring(0, 15)} agregado exitosamente!`);
  };

  const handleDeleteProduct = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}`);
        
        toast.success(`${product?.name.substring(0, 15)} eliminado exitosamente!`);
        router.push("/");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg relative">
      <button
        onClick={handleDeleteProduct}
        className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        aria-label="Eliminar producto"
      >
        <FaTrash className="text-lg" />
      </button>

      <Link
        href={`/products/${product?.id}`}
        aria-label="Editar producto"
        className="absolute top-4 right-16 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
      >
        <FaEdit className="text-lg" />
      </Link>

      <div>
        <img
          src={product?.image}
          alt="product image"
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-center gap-y-10">
        <div>
          <p className="text-3xl font-semibold">{product?.name}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={product?.price} />
          </p>
        </div>
        <p>{product?.description}</p>
        <div
          onClick={handleAddToCart}
          className="flex items-center cursor-pointer group"
        >
          <button className="bg-slate-800 text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500">
            Agregar al carrito
          </button>
          <span className="bg-slate-800 text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
            <IoMdCart />
          </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
