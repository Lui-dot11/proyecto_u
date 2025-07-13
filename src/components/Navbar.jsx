import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import '../Styles/Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MiTienda</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admistrar</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                🛒 Carrito
                {totalItems > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


