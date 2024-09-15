import React, { useState, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

const UserCreation: React.FC = () => {
  const [tableName, setTableName] = useState<string>(''); // Estado para almacenar el nombre del cliente
  const [message, setMessage] = useState<string>(''); // Estado para el mensaje de respuesta
  const [error, setError] = useState<string>(''); // Estado para errores
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verifica que se haya proporcionado un nombre de cliente y una base de datos
    if (!tableName) {
      setError('Por favor, ingresa un nombre para el cliente');
      return;
    }

    if (!selectedValue) {
      setError('Por favor selecciona una base de datos');
      return;
    }

    // Limpia el mensaje de error
    setError('');
    
    // Realiza la petición al backend
    try {
      const response = await fetch('http://localhost:5000/user_creation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            table_name: tableName,        // Enviar el nombre del cliente
            db_name: selectedValue // Enviar la base de datos seleccionada
        }), 
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message); // Mensaje de éxito
        setError(''); // Limpiar error
      } else {
        setError(data.message); // Mostrar mensaje de error
        setMessage('');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  // Reemplaza espacios por guiones bajos cada vez que se cambia el valor del campo de texto
  const handleOrderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, '_'); // Reemplaza espacios por guiones bajos
    setTableName(value);
  };

  // Función para obtener la lista de bases de datos desde el backend
  const fetchOptions = async () => {
    try {
      const response = await fetch('http://localhost:5000/list_order', {
        method: 'GET', // Cambia el método a GET
      });

      const data = await response.json();
      const databases: Option[] = data.databases.map((db: string) => ({
        value: db,
        label: db,
      }));
      setOptions(databases);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching databases:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOptions(); // Llama a la función al montar el componente
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h2>Ingresa un cliente</h2>
      {loading ? (
        <p>Loading options...</p>
      ) : (
        <>
          <label htmlFor="dropdown">Selecciona una order de compra:</label>
          <select id="dropdown" value={selectedValue} onChange={handleChange}>
            <option value="">-- Selecciona una orden --</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {selectedValue && <p>You selected: {selectedValue}</p>}
        </>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="orderName">Nombre del cliente:</label>
          <input
            type="text"
            id="orderName"
            value={tableName}
            onChange={handleOrderNameChange} // Usa la nueva función de cambio
          />
        </div>
        <button type="submit">Crear cliente</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UserCreation;
