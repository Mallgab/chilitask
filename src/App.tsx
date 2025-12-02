import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default App;