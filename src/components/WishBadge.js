import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wish from '../helpers/Wish';
import Events from '../helpers/Events';
function WishBadge() {
  const [total, setTotal] = useState(Wish.getAll().length);
  const handleWishChange = (wish) => {
    setTotal(wish.length);
  };
  useEffect(() => {
    Events.on('wish:change', handleWishChange);
  }, []);
  return (
    <Link to="/wish">
      <i className="fa fa-heart"></i> <span>{total}</span>
    </Link>
  );
}

export default WishBadge;
