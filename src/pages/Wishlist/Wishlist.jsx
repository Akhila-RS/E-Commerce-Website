import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaArrowLeft } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="container py-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaHeart size={80} className="text-danger mb-4" />
          <h2 className="mb-4">Your Wishlist is Empty</h2>
          <p className="mb-4">Looks like you haven't added any items to your wishlist yet.</p>
          <Link to="/products" className="btn btn-primary">
            <FaArrowLeft className="me-2" />
            Browse Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Your Wishlist</h2>
          <span className="badge bg-primary">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        <div className="row">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Wishlist; 