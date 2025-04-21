import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Wishlist from './pages/Wishlist/Wishlist';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="app">
            <Navbar />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </motion.main>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
