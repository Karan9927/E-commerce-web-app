import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className="lg:pb-[19%] py-24 flex justify-center">
      <div className="w-[50%]">
        <div className="uppercase px-6 text-sm font-semibold text-center">
          Shopping Bag ({itemAmount})
        </div>
        <div className="border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex justify-between">
          <div className="uppercase font-semibold px-6">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div className="pr-6 py-4">
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <Link
            to=""
            className="bg-primary flex p-4 justify-center items-center text-white w-[50%] font-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
