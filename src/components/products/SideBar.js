import React from 'react';
import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';

function SideBar() {
  return (
    <div className="sidebar">
      {/* category */}
      <CategoryFilter />
      {/* price */}
      <PriceFilter />
      {/* rating */}
      <RatingFilter />
      {/* brands */}
      <BrandFilter />
      <div className="sidebar__item">
        <div className="latest-product__text">
          <h4>Latest Products</h4>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
