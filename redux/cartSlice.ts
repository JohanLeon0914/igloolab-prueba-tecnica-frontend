import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../app/types/product";

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
    
      const priceAsNumber = Number(action.payload.price);
    
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: CartItem = {
          ...action.payload,
          quantity: 1,
          price: priceAsNumber, 
        };
        state.cartItems.push(newItem);
      }
    
      state.totalQuantity += 1;
      state.totalPrice = Number((state.totalPrice + priceAsNumber).toFixed(2)); 
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);

      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price as number;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
