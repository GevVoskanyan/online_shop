import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <Link to="/">Fresh Meat</Link>
                  </li>
                  <li>
                    <Link to="/">Vegetables</Link>
                  </li>
                  <li>
                    <Link to="/">Fruit & Nut Gifts</Link>
                  </li>
                  <li>
                    <Link to="/">Fresh Berries</Link>
                  </li>
                  <li>
                    <Link to="/">Ocean Foods</Link>
                  </li>
                  <li>
                    <Link to="/">Butter & Eggs</Link>
                  </li>
                  <li>
                    <Link to="/">Fastfood</Link>
                  </li>
                  <li>
                    <Link to="/">Fresh Onion</Link>
                  </li>
                  <li>
                    <Link to="/">Papayaya & Crisps</Link>
                  </li>
                  <li>
                    <Link to="/">Oatmeal</Link>
                  </li>
                  <li>
                    <Link to="/">Fresh Bananas</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
