import React, { useState } from 'react';
import CouponSlide from './CouponSlide';
import Item from './Item.js';
import Navbar from './Navbar.js';
import './App.css';
import bottom1 from './bottom1.jpg';
import bottom2 from './bottom2.jpg';
import bottom3 from './bottom3.jpg';

const data = [
  {
    title: "Deadpool",
    path: bottom1,
    description: "Watch how Deadpool faces Wolverine in explosive showdown",
    price: "₹250",
  },
  {
    title: "Jumanji",
    path: bottom2,
    description: "A magical game pulls players into a wild, dangerous jungle adventure full of surprises.",
    price: "₹200",
  },
  {
    title: "Meg2",
    path: bottom3,
    description: "A massive shark emerges, threatening humanity with jaws of unstoppable terror.",
    price: "₹150",
  },
];

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = (price) => {
    setTotalPrice(prev => prev + price);
    setItemCount(prev => prev + 1);
  };

  const confirmOrder = () => {
    setTotalPrice(0);
    setItemCount(0);
    alert("Order Confirmed!");
  };

  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}>
      <Navbar itemCount={itemCount} totalPrice={totalPrice} confirm={confirmOrder} />
      <CouponSlide />
      <div
        style={{
          color: 'white',
          paddingTop: '20px',
          paddingLeft: '42vw',
          fontSize: '30px',
          fontWeight: 'bold'
        }}
      >
        TRENDING MOVIES
      </div>
      <div style={{ display: 'flex', gap: '30px', padding: '30px' }}>
        {data.map((item, index) => (
          <Item
            key={index}
            path={item.path}
            title={item.title}
            description={item.description}
            price={item.price}
            onAddToCart={() =>
              handleAddToCart(parseInt(item.price.replace('₹', ''), 10))
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
