import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="btn btn-outline-primary mb-4">
        <FaArrowLeft className="me-2" />
        Back to Products
      </Link>

      <div className="row">
        <div className="col-md-6">
          <motion.img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{product.title}</h1>
          <div className="mb-4">
            <span className="badge bg-primary me-2">{product.category}</span>
            <span className="h4">${product.price}</span>
          </div>
          <p className="mb-4">{product.description}</p>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <span className="text-muted">Rating:</span>
              <span className="ms-2">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
            <motion.button
              className="btn btn-primary"
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail; 