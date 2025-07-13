import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Productos actualizados desde localStorage
  const storedProducts = localStorage.getItem('products');
  const updatedProductList = storedProducts ? JSON.parse(storedProducts) : [];

  // Sincronizar cada item del carrito con la versión actualizada del producto
  const syncedCartItems = cartItems.map(item => {
    const updated = updatedProductList.find(p => p.id === item.id);
    return updated ? { ...item, ...updated } : item;
  });

  // Calcular el total usando precios actualizados
  const total = syncedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkout = () => {
    navigate('/success');
    clearCart();
  };

  return (
    <section className="container my-5">
      <h2>Carrito de Compras</h2>

      {syncedCartItems.length === 0 ? (
        <p>
          Tu carrito está vacío. <Link to="/products">Ver productos</Link>
        </p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {syncedCartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name} x {item.quantity}</strong><br />
                  <small>${item.price.toFixed(2)} cada uno</small>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-danger ms-3" onClick={() => removeFromCart(item.id)}>
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart_total mt-4">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Link to="/products" className="btn btn-success mt-2">
              Agregar más productos
            </Link>
            &nbsp;
            <button className="btn btn-primary mt-2" onClick={checkout}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;