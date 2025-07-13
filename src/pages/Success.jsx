import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="container mt-4 text-center">
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu pedido ha sido procesado correctamente.</p>
      <Link to="/products" className="btn btn-outline-primary product-card__btn">
                Seguir Comprando
              </Link>
    </div>
  );
}

export default Success
