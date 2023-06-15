import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetailsDesc({ product }) {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="product__details__text">
        <h3>{product.title}</h3>
        <div className="product__details__rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </div>
        <div className="product__details__price">
          <span className={product.discountPrice ? 'line-through' : null}>
            {product.price ? `${product?.price}$` : null}
          </span>
          <span>
            {product.discountPrice ? `${product.discountPrice}$` : null}
          </span>
        </div>
        <p>{product.description}</p>
        <div className="product__details__quantity">
          <div className="quantity">
            <div className="pro-qty">
              <input type="text" value="1" readOnly />
            </div>
          </div>
        </div>
        <Link to="/" className="primary-btn">
          ADD TO CARD
        </Link>
        <Link to="/" className="heart-icon">
          <span className="icon_heart_alt"></span>
        </Link>
        <ul>
          <li>
            <b>Availability</b>
            <span>{product.stock > 0 ? 'In stock' : 'Out of stock'}</span>
          </li>

          <li>
            <b>Share on</b>
            <div className="share">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetailsDesc;
