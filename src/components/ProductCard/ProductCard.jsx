import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      className="col-md-4 col-sm-6 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card h-100">
        <div className="position-relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={product.image}
              className="card-img-top p-3"
              alt={product.title}
              style={{ height: '200px', objectFit: 'contain' }}
            />
          </motion.div>
          <motion.button
            className="position-absolute top-0 end-0 m-2 btn btn-light rounded-circle"
            onClick={handleWishlistClick}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart
              size={20}
              className={isWishlisted ? 'text-danger' : 'text-muted'}
            />
          </motion.button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-muted">
            {product.description.substring(0, 100)}...
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="h5 mb-0">${product.price}</span>
            <Link
              to={`/product/${product.id}`}
              className="btn btn-primary"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 