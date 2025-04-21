import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(['all', ...uniqueCategories]);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    category === 'all' ? true : product.category === category
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating.rate - a.rating.rate;
      default:
        return 0;
    }
  });

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
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center mb-5">All Products</h1>
        
        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select
                id="category"
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="sort" className="form-label">Sort By</label>
              <select
                id="sort"
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-5">
            <h3>No products found in this category</h3>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Products; 