import Carousel from 'nuka-carousel/lib/carousel';
import React, { useState } from 'react';

function ProductDetailsSlider({ product }) {
  const [currentImage, setCurrentImage] = useState();
  return (
    <div className="col-lg-6 col-md-6">
      <div className="product__details__pic">
        <div className="product__details__pic__item">
          <img
            className="product__details__pic__item--large"
            style={{
              height: '500px',
              objectFit: 'cover',
            }}
            src={currentImage ? currentImage : product.thumbnail}
            alt={product.brand}
          />
        </div>
        {product.images.length > 1 ? (
          <div className="product__details__pic__slider owl-carousel">
            <Carousel slidesToShow={4}>
              {product.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  style={{ width: 200, height: 100 }}
                  className="slider_img"
                  alt={product.brand}
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            </Carousel>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductDetailsSlider;
