import React from 'react';
import products from '../../products.json';
import _ from 'lodash';
import ProductItem from './ProductItem';

function RelatedProduct({ product }) {
  let prod = products.filter((p) => p.category === product.category);
  const randomItems = _.sampleSize(prod, 4);
  return (
    <section className="related-product">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title related__product__title">
              <h2>Related Product</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {randomItems.map((item) => (
            <ProductItem
              wrapperClassName="col-lg-3 col-md-4 col-sm-6"
              data={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProduct;
