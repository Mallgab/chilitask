import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  
  const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 sm:px-10 lg:px-16 xl:px-24 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md border">

      <button className="btn" onClick={() => navigate(-1)}>
            Go Back
        </button>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-72 object-contain mb-6 bg-white p-4 rounded-xl"
        />

        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        <p className="text-xl font-semibold text-gray-700 mb-2">
          Price: ${product.price}
        </p>

        <p className="text-gray-600 mb-4">
          Category:{" "}
          <span className="font-medium">
            {Capitalize(product.category)}
          </span>
        </p>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
