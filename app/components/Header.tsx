"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";  
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import FormattedPrice from "./FormattedPrice";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { RootState } from "@/redux/store";
import { CartItem } from "../types/product";

function Header() {
  const { cartItems } = useSelector((state: RootState) => state.cart);  
  const [totalAmount, setTotalAmount] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const formattedAmount = new Number(9999.99).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    let amt = 0;
    cartItems.forEach((item: CartItem) => {
      amt += item.price * item.quantity;  
    });
    setTotalAmount(amt);
  }, [cartItems]);

  return (
    <div className="bg-white h-20 sticky top-0 z-50">
      <div className="h-full flex justify-between items-center px-4 xl:px-40">
        <Logo />

        <Link href="/cart">
          <div
            className={`bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white
            flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black
            hover:border-orange-600 duration-200 relative ${isMobile ? "flex-col items-center" : ""}`}
          >
            <IoMdCart className="text-xl" />
            {isMobile && totalAmount && totalAmount > 9999.99 ? (
              <p className="text-sm font-semibold">+{formattedAmount}</p>
            ) : (
              <>
                <p className="text-sm font-semibold">
                  <FormattedPrice amount={totalAmount ? totalAmount : 0} />
                </p>
                <span
                  className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 
                  flex items-center justify-center shadow-xl shadow-black"
                >
                  {cartItems.length}  
                </span>
              </>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
