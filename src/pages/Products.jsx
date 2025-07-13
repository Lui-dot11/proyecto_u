import React, { useState } from 'react';
//import listproducts from '../data/listproducts.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import '../Styles/Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products] = useState(() => {
  const stored = localStorage.getItem('products');
  return stored ? JSON.parse(stored) : [];
});

 const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <section className="products container">
      <h2 className="products__title my-4">Catálogo de Productos</h2>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
</section>
  );
};

export default Products;
