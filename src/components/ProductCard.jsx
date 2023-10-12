const ProductCard = ({ product }) => {
  return (
    <div className="flex lg:w-1/4 w-2/3 bg-slate-100 rounded-md shadow-md overflow-hidden">
      <div
        key={product.id}
        className="flex flex-col min-w-full p-5 items-center justify-between gap-2 flex-grow"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full aspect-square object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-bold line-clamp-1">{product.title}</h2>
        <p className="text-sm line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
