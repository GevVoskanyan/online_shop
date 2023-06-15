import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import MetaHeaders from '../components/MetaHeaders';
import ProductDetailsDesc from '../components/products/ProductDetailsDesc';
import ProductDetailsSlider from '../components/products/ProductDetailsSlider';
import RelatedProduct from '../components/products/RelatedProduct';
import Wrapper from '../components/Wrapper';
import products from '../products.json';
import NotFound from './NotFound';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => parseInt(p.id) === parseInt(id));
  if (!product) {
    return <NotFound />;
  }
  return (
    <Wrapper>
      <MetaHeaders
        image={product.thumbnail}
        title={`Smart Shop: ${product.title}`}
      />
      <Breadcrumbs />
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <ProductDetailsSlider product={product} />
            <ProductDetailsDesc product={product} />
          </div>
        </div>
      </section>
      <RelatedProduct product={product} />
    </Wrapper>
  );
}

export default ProductDetails;
