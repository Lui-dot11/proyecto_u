import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored
        ? JSON.parse(stored)
        : typeof initialValue === 'function'
        ? initialValue()
        : initialValue;
    } catch (error) {
      console.error(`Error leyendo localStorage para key "${key}":`, error);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }
  });

  // Guarda en localStorage al cambiar el estado
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error guardando en localStorage para key "${key}":`, error);
    }
  }, [key, value]);

  // Sincroniza entre pestañas si el mismo key cambia
  useEffect(() => {
    const syncValue = (event) => {
      if (event.key === key) {
        try {
          const newValue = event.newValue
            ? JSON.parse(event.newValue)
            : typeof initialValue === 'function'
            ? initialValue()
            : initialValue;

          setValue(newValue);
        } catch (error) {
          console.error(`Error sincronizando localStorage para key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', syncValue);
    return () => window.removeEventListener('storage', syncValue);
  }, [key, initialValue]);

  return [value, setValue];
}