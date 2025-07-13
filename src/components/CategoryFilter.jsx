import React from 'react';

function CategoryFilter({ category, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter mb-4">
      <select
        className ="form-select"
        value ={selectedCategory}
        onChange={(e) => onSelectCategory (e.target.value)}
        >
        <option value="">Todas las categorías</option>
        {category.map((cat) => (
           <option key={cat} value= {cat}>
            {cat}
          </option>
        ))}
        </select>
      </div>
  );
}

export default CategoryFilter
