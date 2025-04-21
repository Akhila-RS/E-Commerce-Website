import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css'; // Don't forget to import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3 footer-text">LianCart</h5>
            <p className="footer-text">
              Your one-stop destination for all your shopping needs. Quality products at affordable prices with excellent customer service.
            </p>
            <div className="d-flex gap-3 mt-3">
              <motion.a href="https://facebook.com/liancart" whileHover={{ scale: 1.2 }} className="footer-text" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </motion.a>
              <motion.a href="https://twitter.com/liancart" whileHover={{ scale: 1.2 }} className="footer-text" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </motion.a>
              <motion.a href="https://instagram.com/liancart" whileHover={{ scale: 1.2 }} className="footer-text" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </motion.a>
              <motion.a href="https://linkedin.com/company/liancart" whileHover={{ scale: 1.2 }} className="footer-text" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h5 className="mb-3 footer-text">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="footer-text text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/products" className="footer-text text-decoration-none">Products</Link></li>
              <li className="mb-2"><Link to="/cart" className="footer-text text-decoration-none">Cart</Link></li>
              <li className="mb-2"><Link to="/wishlist" className="footer-text text-decoration-none">Wishlist</Link></li>
              <li className="mb-2"><Link to="/profile" className="footer-text text-decoration-none">Profile</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h5 className="mb-3 footer-text">Categories</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/products?category=electronics" className="footer-text text-decoration-none">Electronics</Link></li>
              <li className="mb-2"><Link to="/products?category=clothing" className="footer-text text-decoration-none">Clothing</Link></li>
              <li className="mb-2"><Link to="/products?category=home" className="footer-text text-decoration-none">Home & Kitchen</Link></li>
              <li className="mb-2"><Link to="/products?category=beauty" className="footer-text text-decoration-none">Beauty</Link></li>
              <li className="mb-2"><Link to="/products?category=sports" className="footer-text text-decoration-none">Sports</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 mb-4">
            <h5 className="mb-3 footer-text">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" />
                <span className="footer-text">
                  LianCart Innovations<br />
                  101 Innovation Street<br />
                  Silicon Valley, CA 90210<br />
                  United States
                </span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhone className="me-2" />
                <span className="footer-text">
                  Support: +1 (800) 123-4567<br />
                  Sales: +1 (800) 765-4321<br />
                  Helpline: +1 (800) 987-6543
                </span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-2" />
                <span className="footer-text">
                  help@liancart.shop<br />
                  care@liancart.shop<br />
                  press@liancart.shop
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 footer-text">
              &copy; {currentYear} LianCart. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/privacy" className="footer-text text-decoration-none me-3">Privacy Policy</Link>
            <Link to="/terms" className="footer-text text-decoration-none me-3">Terms of Service</Link>
            <Link to="/faq" className="footer-text text-decoration-none">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
