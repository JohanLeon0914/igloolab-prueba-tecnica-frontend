"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItemComponent from "../components/CartItem";
import Link from "next/link";
import FormattedPrice from "../components/FormattedPrice";

const CartPage = () => {
  const { cartItems, totalPrice } = useSelector((state: RootState) => state.cart); 

  return (
    <div className="p-4 bg-gray-100 px-4 xl:px-40">
      <h2 className="text-2xl font-semibold mb-4">Tu carrito de compras</h2>

      {cartItems.length > 0 ? (
        <>
          <CartItemComponent /> 
          
          <div className="flex justify-end mt-4">
            <div className="text-xl font-semibold">
              <p className="mb-2">Total: <FormattedPrice amount={totalPrice} /></p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
          <p className="border-[1px] border-orange-600 w-full p-2 text-center">
            Tu carrito esta vacío 
          </p>
          <Link href="/">
            <button className="bg-slate-800 text-slate-100 py-2 px-6 rounded-md hover:bg-orange-600 duration-200">
            Volver a la tienda
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
