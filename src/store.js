import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart/cartSlice";
import ModalSlice from "./feature/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: ModalSlice,
  },
});
