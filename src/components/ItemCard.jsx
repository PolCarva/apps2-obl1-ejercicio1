import React, { useState } from "react";

const ItemCard = ({ id, img, title, desc, onClickAddToCart, isOnCart=true }) => {
  return (
    <div className="w-full my-2">
      <div className="border border-gray-300 rounded-md p-2 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            className="w-12 md:w-20 aspect-square object-cover rounded-md"
            src={img}
            alt={title}
          />
          <div className="flex flex-col w-2/3">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm line-clamp-3">{desc}</p>
          </div>
        </div>
        <button
          onClick={() => {
            onClickAddToCart({ img, title, desc, id });
          }}
          className={`${
            isOnCart
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          } rounded-md h-full min-h-[2rem] min-w-[5rem] transition-colors px-4 md:h-12 text-white`}
        >
          {isOnCart ? "Delete" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
