import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa el hook useNavigate
import background from '../Images/11282021-Shein_Inline_08.png';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();  // Usa el hook useNavigate para redirigir

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (username === '' || password === '') {
            setError('Por favor, complete todos los campos.');
        } else if (username === 'admin' && password === '1234') {  // Autenticación simple
            setError('');
            navigate('/dashboard');  // Redirige al dashboard si la autenticación es correcta
        } else {
            setError('Credenciales incorrectas.');
        }
    };

    return (
        <div 
            style={{
                backgroundImage: `url(${background})`,  // Imagen en public/Images/
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',  // Centrar horizontalmente
                alignItems: 'center',  // Centrar verticalmente
            }}
        >
            <div 
                style={{
                    backgroundColor: 'rgba(200, 200, 200, 0.8)',  // Fondo semitransparente para el formulario
                    padding: '10px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',  // Sombra para el formulario
                }}
            >
                <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Nombre de Usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ width: '80%', padding: '5px', margin: '8px 0', borderRadius: '5px' }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '80%', padding: '5px', margin: '8px 0', borderRadius: '5px' }}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button 
                        type="submit"
                        style={{ 
                            width: '80%', 
                            padding: '10px', 
                            backgroundColor: '#4CAF50', 
                            color: 'white', 
                            borderRadius: '5px', 
                            border: 'none', 
                            cursor: 'pointer' 
                        }}
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
