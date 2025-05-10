// src/Image.js
// return image component
import React from 'react';
import product from './product';

function Image() {
  return <img src={product.image} alt="Product" className="img-fluid" />;
}

export default Image;
