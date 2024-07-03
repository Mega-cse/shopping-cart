
import React, { useState } from "react";
import Navbar from "./assets/components/Navbar";
import ProductList from "./assets/components/ProductList";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const products = [
    {
      id: 1,
      name: 'FancyProduct',
      price: '40.00-80.00',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',

    },
    {
      id: 2,
      name: 'Special Item',
      price: '18.00',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',

    },
    {
      id: 3,
      name: 'Sale Item',
      price: '25.00',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',

    },
    {
      id: 4,
      name: 'Popular Item',
      price: '40.00',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',

    },
    {
      id: 5,
      name: 'Sale Item',
      price: '25.00',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',

    },
    {
      id: 6,
      name: 'FancyProduct',
      price: '120.00-280.00',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',

    },
    {
      id: 7,
      name: 'Special Item',
      price: '18.00',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',

    },
    {
      id: 8,
      name: 'Popular Item',
      price: '40.00',
      image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',

    },

  ];

  return (
    <div className="App">
      
      <Navbar cartItems={cartItems} />
      <Header />
      <div className="container mt-4">
        <div className="row">
         
            <ProductList
              products={products}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
        <Footer />
      </div>
    
  );
}

export default App;
