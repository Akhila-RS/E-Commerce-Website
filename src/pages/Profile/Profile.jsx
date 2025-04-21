import { motion } from 'framer-motion';
import { FaUser, FaShoppingBag, FaHeart, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

const Profile = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate
    // For now, we'll just simulate a successful login
    setIsLoggedIn(true);
    // Save login state to localStorage
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Check if user is logged in on component mount
  useState(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="row justify-content-center"
        >
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="text-center mb-4">
                  <FaUser size={60} className="text-primary" />
                  <h3 className="mt-3">Welcome Back</h3>
                  <p className="text-muted">Please login to access your account</p>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={loginForm.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p className="mb-0">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary">
                      Register here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="row justify-content-center"
      >
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <FaUser size={80} className="text-primary" />
              </div>
              <h3 className="mb-3">Welcome to Lian Shop</h3>
              <p className="text-muted mb-4">Manage your account and preferences</p>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <Link to="/cart" className="text-decoration-none">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card h-100"
                    >
                      <div className="card-body">
                        <FaShoppingBag size={30} className="text-primary mb-3" />
                        <h5>Orders</h5>
                        <p className="text-muted">
                          {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </div>
                
                <div className="col-md-6">
                  <Link to="/wishlist" className="text-decoration-none">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card h-100"
                    >
                      <div className="card-body">
                        <FaHeart size={30} className="text-primary mb-3" />
                        <h5>Wishlist</h5>
                        <p className="text-muted">
                          {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </div>
                
                <div className="col-md-6">
                  <Link to="/settings" className="text-decoration-none">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card h-100"
                    >
                      <div className="card-body">
                        <FaCog size={30} className="text-primary mb-3" />
                        <h5>Settings</h5>
                        <p className="text-muted">Manage your preferences</p>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                <button 
                  onClick={handleLogout}
                  className="btn btn-outline-danger"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile; 