import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../../helpers/Cart';
import Events from '../../helpers/Events';
import Wish from '../../helpers/Wish';

function ProductItem(props) {
  const { data, wrapperClassName } = props;
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const handleAddToCart = (ev) => {
    ev.preventDefault();
    if (Cart.get(data.id)) {
      navigate('/cart');
    } else {
      Cart.add(data, 1);
    }
  };

  const handleAddToWish = useCallback(
    (ev) => {
      ev.preventDefault();
      if (Wish.get(data.id)) {
        Wish.delete(data.id);
        setIsActive((isActive) => !isActive);
      } else if (!Wish.get(data.id)) {
        Wish.add(data.id, 1);
        setIsActive((isActive) => !isActive);
      }
      // Events.emit('isWishActive', isActive);
    },
    [data]
  );
  return (
    <div className={wrapperClassName}>
      <div className="product__item">
        <div
          className="product__item__pic set-bg"
          style={{ backgroundImage: `url(${data.thumbnail})` }}
        >
          <ul className="product__item__pic__hover">
            <li>
              <Link
                onClick={handleAddToWish}
                style={isActive ? { color: 'red' } : { color: 'green' }}
              >
                <i className="fa fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fa fa-retweet"></i>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleAddToCart}>
                <i className="fa fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
        </div>
        <Link to={`/shop/${data.id}`}>
          <div className="product__item__text">
            <h6>{data.title}</h6>
            <div className="product__details__price">
              <span className={data.discountPrice ? 'line-through' : null}>
                {data.price}
              </span>
              <span>{data.discountPrice}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

ProductItem.defaultProps = {
  wrapperClassName: 'col-lg-4 col-md-6 col-sm-6',
};
export default ProductItem;
