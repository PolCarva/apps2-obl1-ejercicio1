import { useState, useRef } from "react";
import { data } from "../data/data";
import ItemCard from "../components/ItemCard";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

const SearchSection = () => {
  const categories = data.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  const [products, setProducts] = useState(data);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemsCart, setItemsCart] = useState([]);
  const inputRef = useRef(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleInpChange = () => {
    const value = inputRef.current.value;
    const filteredProducts = data.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });
    setProducts(filteredProducts);
  };

  const handleDeleteFilter = () => {
    inputRef.current.value = "";
    setProducts(data);
  };

  const handleClickAddToCart = (product) => {
    const productIndex = itemsCart.findIndex((item) => item.id === product.id);

    if (productIndex === -1) {
      setItemsCart([product, ...itemsCart]);
      toast.success("Product added to the cart");
    } else {
      const updatedCart = [...itemsCart];
      updatedCart.splice(productIndex, 1);
      setItemsCart(updatedCart);
      toast.error("Product removed from the cart");
    }
  };

  const handleChangeCategoryFilter = (e) => {
    const value = e.target.value;
    if (value === "0") {
      setProducts(data);
    } else {
      const filteredProducts = data.filter(
        (product) => product.category === value
      );
      setProducts(filteredProducts);
    }
  };

  return (
    <section>
      <div className="p-5 flex flex-col">
        <div className="flex justify-between flex-col gap-5 w-full ">
          <div className="flex w-full md:w-2/3 mx-auto gap-2 items-stretch flex-col">
            <h1 className="text-2xl font-bold">Search</h1>
            <div className="flex flex-1 w-full gap-5">
              <input
                onChange={handleInpChange}
                ref={inputRef}
                type="text"
                placeholder="Search Items"
                className="border flex-1 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              <button
                className="bg-red-500 w-auto md:w-1/6 md:text-base hover:bg-red-800 px-2 py-1 rounded-md text-white transition-colors duration-300"
                onClick={handleDeleteFilter}
              >
                Clear
              </button>
            </div>
            <select
              id="categoryFilter"
              onChange={handleChangeCategoryFilter}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value={0}>Categories</option>
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat[0].toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          {/* Modal Carrito */}
          <div className="w-full md:w-2/3 mx-auto">
            <div
              onClick={toggleCart}
              className="cursor-pointer w-1/3 text-center md:w-40 float-right bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-bold"
            >
              <p>
                Cart <span>{itemsCart.length}</span>
              </p>
              <div
                onClick={toggleCart}
                className={`${
                  isCartOpen ? "visible" : "hidden"
                } w-full h-full bg-black bg-opacity-20 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex justify-center items-center`}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="bg-white rounded-lg w-[95%] md:w-1/2 h-2/3 overflow-y-auto p-4 cursor-default"
                >
                  <div className="flex justify-between">
                    <h3>Your Cart</h3>
                    <AiOutlineClose
                      className="cursor-pointer"
                      onClick={toggleCart}
                    />
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
            </div>
          </div>
        </div>
        <span className="py-5 text-left md:text-center">{products.length} products found</span>
        <div className="flex w-full md:w-2/3 mx-auto flex-wrap">
          {products.map((product) => {
            return (
              <ItemCard
                key={"list" + product.id}
                id={product.id}
                img={product.thumbnail}
                title={product.title}
                desc={product.description}
                onClickAddToCart={handleClickAddToCart}
                isOnCart={itemsCart.some((item) => item.id === product.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
