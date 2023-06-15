import React from 'react';
import { Range } from 'react-range';
import _ from 'lodash';
import { useSearchParams } from 'react-router-dom';
import products from '../../products.json';

const maxPrice = _.maxBy(products, (p) => +p.discountPrice || +p.price).price;
function PriceFilter(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const min = +searchParams.get('min') || 0;
  const max = +searchParams.get('max') || maxPrice;
  return (
    <div className="sidebar__item">
      <h4>Price</h4>
      <div className="price-range-wrap">
        <Range
          step={1}
          min={0}
          max={maxPrice}
          multiple
          values={[min, max]}
          onChange={(values) => {
            searchParams.set('min', values[0]);
            searchParams.set('max', values[1]);
            setSearchParams(searchParams, { replace: true });
          }}
          renderTrack={({ props, children }) => (
            <div {...props} className="slider-track">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="slider-thumb" />
          )}
        />
        <div className="range-slider">
          <div className="price-input">
            <input type="text" value={`$${min}`} readOnly />
            <input type="text" value={`$${max}`} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
