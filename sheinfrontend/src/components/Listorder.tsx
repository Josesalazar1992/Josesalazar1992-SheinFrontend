import React, { useState, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

const ListOrder: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

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
      <h2>Seleciona una orden</h2>
      {loading ? (
        <p>Loading options...</p>
      ) : (
        <>
          <label htmlFor="dropdown">Select an option:</label>
          <select id="dropdown" value={selectedValue} onChange={handleChange}>
            <option value="">-- Please select an option --</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {selectedValue && <p>You selected: {selectedValue}</p>}
        </>
      )}
    </div>
  );
};

export default ListOrder;
