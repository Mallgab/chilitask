import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'
import ProductCard from './components/ProductCard'
import Loading from './components/Loading'


const BASE_API_URL = 'https://dummyjson.com/products';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  

  const fetchProducts = async (searchTerm: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_API_URL}/search?q=${searchTerm}`);
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
   
      fetchProducts(searchTerm);
   
  }, [searchTerm]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
  <header className="py-8">
    <h1 className="text-4xl font-extrabold text-gray-800 text-center">
      Browse The Goods You Want
    </h1>
  </header>

  <div className="w-full">
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    {isLoading ? <Loading /> : <ProductCard products={products} />}
  </div>
</div>

    </>
  );
};

export default Home;
