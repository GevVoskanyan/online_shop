import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../helpers/Cart';
import Events from '../helpers/Events';

function CartBadge() {
  const [total, setTotal] = useState();
  const handleChange = (cart) => {
    setTotal(cart.length);
  };
  useEffect(() => {
    Events.on('cart:change', handleChange);
    return () => {
      Events.off('cart:change', handleChange);
    };
  }, []);
  return (
    <Link to="/cart">
      <i className="fa fa-shopping-bag"></i> <span>{total}</span>
    </Link>
  );
}

export default CartBadge;
