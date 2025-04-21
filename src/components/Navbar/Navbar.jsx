import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaHeart, FaHome, FaBox } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartItemCount } = useCart();
  const { wishlist } = useWishlist();
  const cartItemCount = getCartItemCount();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <motion.div
            className="logo-container"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="logo-text">LianCart</span>
          </motion.div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="nav-link" to="/">
                  <div className="icon-container" title="Home">
                    <FaHome size={24} />
                    <span className="tooltip">Home</span>
                  </div>
                </Link>
              </motion.div>
            </li>
            <li className="nav-item">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="nav-link" to="/products">
                  <div className="icon-container" title="Products">
                    <FaBox size={24} />
                    <span className="tooltip">Products</span>
                  </div>
                </Link>
              </motion.div>
            </li>
            <li className="nav-item">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="nav-link position-relative" to="/wishlist">
                  <div className="icon-container" title="Wishlist">
                    <FaHeart size={24} />
                    <span className="tooltip">Wishlist</span>
                  </div>
                  {wishlist.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </motion.div>
            </li>
            <li className="nav-item">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="nav-link position-relative" to="/cart">
                  <div className="icon-container" title="Cart">
                    <FaShoppingCart size={24} />
                    <span className="tooltip">Cart</span>
                  </div>
                  {cartItemCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </motion.div>
            </li>
            <li className="nav-item">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className="nav-link" to="/profile">
                  <div className="icon-container" title="Profile">
                    <FaUserCircle size={24} />
                    <span className="tooltip">Profile</span>
                  </div>
                </Link>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 