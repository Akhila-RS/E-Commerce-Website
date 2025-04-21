import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Your Cart is Empty</h2>
          <p className="mb-4">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/" className="btn btn-primary">
            <FaArrowLeft className="me-2" />
            Continue Shopping
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
        <h2 className="mb-4">Shopping Cart</h2>
        <div className="row">
          <div className="col-md-8">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="card mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                        style={{ maxHeight: '100px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="col-md-4">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="text-muted">${item.price}</p>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control text-center"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          min="1"
                        />
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <motion.button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaTrash />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong>${getCartTotal().toFixed(2)}</strong>
                </div>
                <button className="btn btn-primary w-100">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart; 