import { data } from "../data/data";
import { useState } from "react";
import CarrouselButton from "./CarrouselButton";
import ProductCard from "./ProductCard";

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Carrousel</h1>
        <div className="flex gap-5 mx-auto mt-5 w-full items-center justify-center">
          <CarrouselButton direction="<" onClick={prevProduct} />
          <ProductCard product={data[currentIndex]} />
          <CarrouselButton direction=">" onClick={nextProduct} />
        </div>
      </div>
    </section>
  );
};

export default Carrousel;
