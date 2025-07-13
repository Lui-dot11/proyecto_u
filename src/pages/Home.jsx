import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home__banner text-center py-5 bg-light">
        <h1 className="home__title">Bienvenido a Mi Tienda Online</h1>
        <p className="home__subtitle">Encuentra los mejores productos al mejor precio</p>
        <Link to="/products" className="btn btn-primary home__cta">
          Ver productos
        </Link>&nbsp;
        <Link to="/admin" className="btn btn-primary home__cta">
          Administrar productos
        </Link>
      </div>
    </section>
  );
};
export default Home;