import React, { useState } from 'react';
import ProductItem from '../components/products/ProductItem';
import Wrapper from '../components/Wrapper';
import Wish from '../helpers/Wish';

function WishPage() {
  const [data, setData] = useState(Wish.getWithProducts());
  console.log('data', data);

  return (
    <Wrapper>
      {data.map((data) => (
        <ProductItem key={data.product.id} data={data.product} />
      ))}
    </Wrapper>
  );
}

export default WishPage;
