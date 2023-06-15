import React from 'react';
import _ from 'lodash';
import products from '../../products.json';
import { useSearchParams } from 'react-router-dom';

function CategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const productCategories = products.map((p) => p.category);
  const uniqCategories = _.uniqBy(productCategories);
  const handleClick = (p) => {
    searchParams.set('category', p);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="sidebar__item">
        <h4>Category</h4>
        <ul>
          {uniqCategories.map((c) => (
            <li key={c} onClick={() => handleClick(c)} className="cat">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryFilter;
