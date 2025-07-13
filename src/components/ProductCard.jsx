import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Products.css';

function ProductCard({ product }) {
  return (
 <div className="card product-card">
      <div className="card-body product-card__body">
        <h5 className="card-title product-card__title">{product.name}</h5>
        <p className="card-text product-card__price">${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="btn btn-outline-primary product-card__btn">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
