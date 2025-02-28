/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import FormattedPrice from "./FormattedPrice";
import { Product } from "../types/product";
import { addToCart } from "@/redux/cartSlice";

interface ItemProps {
  item: Product;
}

const ProductsData = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item.name} agregado al carrito`);
  };

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <Link href={{ pathname: `/product/${item.id}` }}>
          <div className="w-full h-96 group overflow-hidden relative">
            <img
              src={item?.image}
              alt="Product image"
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
          </div>
        </Link>
        <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <p>{item?.name}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <p className="font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleAddToCart}
              className="bg-orange-600 px-4 py-2 text-sm tracking-wide rounded-full text-slate-100 hover:bg-orange-800 hover:text-white duration-200"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsData;
