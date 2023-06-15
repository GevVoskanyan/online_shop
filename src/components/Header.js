import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import CartBadge from './CartBadge';
import WishBadge from './WishBadge';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="https://www.facebook.com/">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://www.pinterest.com/">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <Link to="/">Spanis</Link>
                      </li>
                      <li>
                        <Link to="/">English</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <Link to="/">
                      <i className="fa fa-user"></i> Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">
                    <Link to="/">Shop</Link>
                  </li>
                  <li>
                    <Link to="/">Pages</Link>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to="/">Shop Details</Link>
                      </li>
                      <li>
                        <Link to="/">Shoping Cart</Link>
                      </li>
                      <li>
                        <Link to="/">Check Out</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    {/* wish */}
                    <WishBadge />
                  </li>
                  <li>
                    {/* badge */}
                    <CartBadge />
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
