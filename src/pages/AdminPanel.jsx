import React, { useState } from 'react';
import productsData from '../data/listproducts.jsx';
import EditProductModal from '../components/EditProductModal.jsx';
import useLocalStorage from '../hooks/useLocalStorage.jsx'; 
import '../Styles/AdminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useLocalStorage('products', productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    const confirm = window.confirm('¿Estás seguro de que deseas eliminar este producto?');
    if (confirm) {
      setProducts(prev => prev.filter(product => product.id !== id));
    }
  };

  const handleEdit = (product) => {
    console.log("Producto seleccionado:", product);
  setSelectedProduct(product);
  setShowModal(true);
  };

  const handleSave = (updatedProduct) => {
  const newList = products.map(p =>
    p.id === updatedProduct.id ? { ...updatedProduct } : p
  );
  setProducts([...newList]); // crea una copia nueva
  setShowModal(false);
  };

 return (
  <>
    <section className="admin container my-5">
      <h2 className="admin__title mb-4">Panel de Administración</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Fabricante</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.category}</td>
              <td>${prod.price.toFixed(2)}</td>
              <td>{prod.manufacturer}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(prod)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(prod.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    {showModal && selectedProduct && (
      <EditProductModal
        show={showModal}
        product={selectedProduct}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    )}
  </>
);
};

export default AdminPanel;