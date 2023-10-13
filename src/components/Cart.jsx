// Cart.js
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ItemCard from "./ItemCard";

const Cart = ({ isCartOpen, toggleCart, itemsCart, handleClickAddToCart }) => {
  return (
    <div
      className={`${isCartOpen ? "visible" : "hidden"} w-full h-full bg-black bg-opacity-20 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex justify-center items-center`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white rounded-lg w-[95%] md:w-1/2 h-2/3 overflow-y-auto p-4 cursor-default"
      >
        <div className="flex justify-between">
          <h3>Your Cart</h3>
          <AiOutlineClose className="cursor-pointer" onClick={toggleCart} />
        </div>
        {itemsCart.length === 0 ? (
          <p className="text-center mt-5 text-slate-400 font-normal">
            No products here
          </p>
        ) : (
          itemsCart.map((item) => {
            return (
              <ItemCard
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                onClickAddToCart={handleClickAddToCart}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
