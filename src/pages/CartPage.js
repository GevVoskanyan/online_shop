import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Cart from '../helpers/Cart';
import Utils from '../helpers/Utils';
import Events from '../helpers/Events';

function CartPage() {
  const [cart, setCart] = useState(Cart.getWithProducts());
  const [total, setTotal] = useState(Cart.getTotal());
  const handleCartChange = (cart) => {
    setCart(Cart.getWithProducts());
    setTotal(Cart.getTotal());
  };
  useEffect(() => {
    Events.on('cart:change', handleCartChange);
    return () => {
      Events.off('cart:change', handleCartChange);
    };
  }, []);
  return (
    <Wrapper>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.productId}>
                        <td className="shoping__cart__item">
                          <img
                            width={100}
                            height={100}
                            src={item.product.thumbnail}
                            alt=""
                          />
                          <h5>{item.product.title}</h5>
                        </td>
                        <td className="shoping__cart__price">
                          {Utils.priceFormat(
                            item.product.discountPrice || item.product.price
                          )}
                        </td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                            <div className="pro-qty">
                              <span
                                className="dec qtybtn"
                                onClick={() => Cart.add(item.product, -1)}
                              >
                                -
                              </span>
                              <input
                                type="number"
                                min={0}
                                max={item.product.stock}
                                value={item.count}
                                onChange={(ev) =>
                                  Cart.change(
                                    item.product,
                                    +ev.target.value || 1
                                  )
                                }
                              />
                              <span
                                className="inc qtybtn"
                                onClick={() => Cart.add(item.product, 1)}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="shoping__cart__total">
                          {Utils.priceFormat(
                            (item.product.discountPrice || item.product.price) *
                              item.count
                          )}
                        </td>
                        <td className="shoping__cart__item__close">
                          <span
                            className="icon_close"
                            onClick={() => Cart.delete(item.productId)}
                          ></span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <Link to="/shop" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Total <span>{Utils.priceFormat(total)}</span>
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default CartPage;
