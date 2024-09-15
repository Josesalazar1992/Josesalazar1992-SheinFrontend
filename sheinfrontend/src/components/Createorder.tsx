import React, { useState } from 'react';
import background from '../Images/create_order.jpg';

const CreateOrder: React.FC = () => {
    const [orderName, setOrderName] = useState<string>(''); // Estado para almacenar el nombre de la orden
    const [message, setMessage] = useState<string>(''); // Estado para el mensaje de respuesta
    const [error, setError] = useState<string>(''); // Estado para errores

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Realiza la petición al backend
        try {
            const response = await fetch('http://localhost:5000/order_creation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: orderName }), // Enviar el nombre de la orden
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
    setOrderName(value);
    };

    

    return (
        <div style={{
                backgroundImage: `url(${background})`,
                height: '100vh',
                backgroundPosition: 'center', // Centra la imagen
                backgroundSize: 'cover'

                }}>
            <h2 style={{textAlign: 'center',
                        padding: '30px',
             }}>Crea una orden de compra</h2>
            <form style={{textAlign: 'center'}} onSubmit={handleSubmit}>
                <div style={{textAlign: 'center',
                            padding: '30px'}}>
                    <label htmlFor="orderName" style={{display: 'block', marginBottom: '8px'}}>Nombre de la orden </label>
                    <input
                        type="text"
                        id="orderName"
                        value={orderName}
                        onChange={handleOrderNameChange} // Usa la nueva función de cambio
                    />
                </div>
                <button style={{textAlign: 'center',
                                padding: '5px',
                                backgroundColor: 'pink',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}} 
                        type="submit">Crear Orden</button>
            </form>

            {message && <p style={{ color: 'green',
                                    textAlign: 'center',
                                    padding: '30px'
                            }}>{message}</p>}
            {error && <p style={{ 
                                color: 'red',
                                textAlign: 'center',
                                padding: '30px'
                            }}>{error}</p>}
        </div>
    );
};

export default CreateOrder;
