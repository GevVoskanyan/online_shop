import React, { useEffect } from 'react';
import products from '../../products.json';
import _ from 'lodash';
import { useSearchParams } from 'react-router-dom';

function BrandFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = Object.fromEntries([...searchParams]);
  const productBrands = products.map((p) => {
    if (p?.category?.toLowerCase() === category?.toLowerCase()) {
      return p.brand;
    }
  });
  const unique = _.uniqBy(productBrands);
  const uniqBrands = unique.filter((item) => item !== undefined);
  useEffect(() => {
    searchParams.set('brand', '');
    setSearchParams(searchParams);
  }, [category]);
  const handleChange = (b) => {
    searchParams.set('brand', b);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="sidebar__item">
        <h4>Brands</h4>
        <ul className="sidebar__item__size">
          {category
            ? uniqBrands.map((b, i) => (
                <li
                  key={i}
                  className="brand_items"
                  onClick={() => handleChange(b)}
                >
                  {b}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default BrandFilter;
