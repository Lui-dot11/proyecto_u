import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Success from './pages/Success';


function App() {
    return (
  <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/checkout" element={<Success />} />
          <Route path="/success" element={<Success />} />

      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
