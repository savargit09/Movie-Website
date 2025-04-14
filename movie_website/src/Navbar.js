import React from 'react';
import './Navbar.css';
import './App.css';

function Navbar({ itemCount, totalPrice, confirm }) {
  return (
    <div
      style={{
        backgroundColor: 'rgb(250, 217, 111)',
        width: '100vw',
        height: '50px',
        position: 'absolute',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      <div className="left">Movie Booking</div>
      <div className="right">
        Cart: {itemCount} tickets | ₹{totalPrice}
      </div>
      <button className="confirm" onClick={confirm}>
        Confirm Order
      </button>
    </div>
  );
}

export default Navbar;
