import { Link } from "react-router-dom";

const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  thumbnail: string;
}

const ProductCard = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 w-full mt-8">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div
            className="
              bg-white p-4 rounded-xl shadow-md border border-gray-200
              hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer
              flex flex-col h-[380px] justify-between /* Ensure consistent height and distribute content */
            "
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-56 object-contain rounded-lg bg-white p-2"
            />

            <div className="flex flex-col flex-grow">
            <h2 className="text-black font-semibold mt-3 text-base">{product.title}</h2>
            <p className="text-gray-600 text-sm mt-1">Price: ${product.price}</p>
            <p className="text-gray-500 text-sm mt-1">
              Category: {Capitalize(product.category)}
            </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
