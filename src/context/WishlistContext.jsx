import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      console.log('Loading wishlist from localStorage:', JSON.parse(savedWishlist));
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    console.log('Saving wishlist to localStorage:', wishlist);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    console.log('Adding product to wishlist:', product);
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        console.log('Product already in wishlist');
        return prevWishlist;
      }
      const newWishlist = [...prevWishlist, product];
      console.log('New wishlist state:', newWishlist);
      return newWishlist;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}; 