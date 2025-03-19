import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-brand">HRTBT</span>
        <div className="card-chip"></div>
      </div>
      <div className="card-number">
        <span>5303 6084 2402 3649</span>
      </div>
      <div className="card-details">
        <div className="card-expiry">
          <span>08/24</span>
        </div>
        <div className="card-logo">
          <div className="logo-circle"></div>
        </div>
      </div>
      <div className="balance-section">
        <h3>Balance</h3>
        <p>$14,020.44</p>
        <div className="credit-limit">
          <span>Credit limit</span>
          <span>$220 / $1000</span>
        </div>
      </div>
    </div>
  );
};

export default Card;