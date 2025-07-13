import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Styles/EditProductModal.css'; 

export default function EditProductModal({ show, product, onClose, onSave }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
  if (product) {
    setFormData(product);
  }
  }, [product]);

 if (!show || !product) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Editar Producto</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
          </label>
          <label>
            Precio:
            <input type="number" name="price" value={formData.price || 0} onChange={handleChange} />
          </label>
          <label>
            Categoría:
            <input type="text" name="category" value={formData.category || ''} onChange={handleChange} />
          </label>
          <label>
            Fabricante:
            <input type="text" name="manufacturer" value={formData.manufacturer || ''} onChange={handleChange} />
          </label>
          <label>
            Descripción:
            <textarea name="description" value={formData.description || ''} onChange={handleChange} />
          </label>
          <div className="modal-actions">
            <button type="submit" className="btn btn-success">Guardar</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

EditProductModal.propTypes = {
  show: PropTypes.bool.isRequired,
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

