import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/ProductDetail.css';
import { CartContext } from '../context/CartContext.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const storedProducts = localStorage.getItem('products');
  const productList = storedProducts ? JSON.parse(storedProducts) : [];
  const product = productList.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail container text-center mt-5">
        <h2>Producto no encontrado</h2>
        <Link to="/products" className="btn btn-secondary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <section className="product-detail container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="product-detail__title">{product.name}</h2>
          <p className="product-detail__description">{product.description}</p>
          <p className="product-detail__price">Precio: <strong>${product.price.toFixed(2)}</strong></p>
          <p className="product-detail__category">Categoría: {product.category}</p>
          <p className="product-detail__manufacturer">Fabricante: {product.manufacturer}</p>
          <button className="btn btn-primary product-detail__btn" onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail