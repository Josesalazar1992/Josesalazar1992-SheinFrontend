import React, {useState} from "react";

interface LoginProps{}

const Login: React.FC<LoginProps> = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

 //Funcion para manejar el submit 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //Evita refrescar la pagina

        if (username === '' || password === ''){
            setError('Error en autenticacion');
        }else{
            setError('');
            // Aquí es donde iría la lógica para autenticar al usuario (por ejemplo, con una API)
            console.log('Username:', username, 'Password:', password);
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;