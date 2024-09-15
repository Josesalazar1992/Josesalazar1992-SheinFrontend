import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import background from '../Images/lateral.jpg';
import CreateOrder from './Createorder';
import DeleteOrder from './Deleteorder';
import UserCreation from './Usercreation';
import DeleteUser from './Deleteuser';
import AddProduct from './Addproduct';
import DeleteProduct from './Deleteproduct';
import ListOrder from './Listorder';
// Importa otros componentes aquí

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('create-order');

    return (
        <div style={{ display: 'flex' }}>
            {/* Barra lateral */}
            <nav style={{
                width: '225px',  // Ancho de la barra lateral
                padding: '20px', // Espaciado interno
                height: '100vh',
                borderRight: '10px solid #ccc', // Borde derecho
                backgroundImage: `url(${background})`, // Imagen de fondo
                backgroundSize: '', // Asegura que la imagen cubra todo el área
                backgroundPosition: 'center', // Centra la imagen
                }}>
                <ul style={{
                        listStyle: 'none',
                        backgroundColor: 'orange',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '10px', // añade espacio alrededor de los elementos de la lista
                    }}>
                    <li>
                        <Link 
                            to="/dashboard/create-order" 
                            onClick={() => setActiveTab('create-order')} 
                            style={{
                                textDecoration: 'none',
                                width: '80%', 
                                padding: '2px', 
                                backgroundColor: activeTab === 'create-order' ? 'green' : 'transparent',
                                color: activeTab === 'create-order' ? 'white' : 'black', 
                                transition: 'color 1.0s ease',
                                borderRadius: '10px', 
                                border: 'none', 
                                cursor: 'pointer' 
                              }}
                        >
                            Crea una orden
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/delete-order" 
                            onClick={() => setActiveTab('delete-order')} 
                            style={{
                                textDecoration: 'none',
                                width: '80%', 
                                padding: '2px', 
                                backgroundColor: activeTab === 'delete-order' ? 'green' : 'transparent',
                                color: activeTab === 'delete-order' ? 'white' : 'black', 
                                transition: 'color 1.0s ease',
                                borderRadius: '10px', 
                                border: 'none', 
                                cursor: 'pointer' 
                              }}
                        >
                            Borra una orden
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/user-create" 
                            onClick={() => setActiveTab('user-create')} 
                            style={{
                                textDecoration: 'none',
                                width: '80%', 
                                padding: '2px', 
                                backgroundColor: activeTab === 'user-create' ? 'green' : 'transparent',
                                color: activeTab === 'user-create' ? 'white' : 'black', 
                                transition: 'color 1.0s ease',
                                borderRadius: '10px', 
                                border: 'none', 
                                cursor: 'pointer' 
                              }}
                        >
                            Agrega un cliente
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/delete-user" 
                            onClick={() => setActiveTab('delete-user')} 
                            style={{
                                textDecoration: 'none',
                                width: '80%', 
                                padding: '2px', 
                                backgroundColor: activeTab === 'delete-user' ? 'green' : 'transparent',
                                color: activeTab === 'delete-user' ? 'white' : 'black', 
                                transition: 'color 1.0s ease',
                                borderRadius: '10px', 
                                border: 'none', 
                                cursor: 'pointer' 
                              }}
                        >
                            Elimina un cliente
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/add-product" 
                            onClick={() => setActiveTab('add-product')} 
                            style={{
                                textDecoration: 'none',
                                width: '80%', 
                                padding: '2px', 
                                backgroundColor: activeTab === 'add-product' ? 'green' : 'transparent',
                                color: activeTab === 'add-product' ? 'white' : 'black', 
                                transition: 'color 1.0s ease',
                                borderRadius: '10px', 
                                border: 'none', 
                                cursor: 'pointer' 
                              }}
                        >
                            Agrega un producto
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/delete-product" 
                            onClick={() => setActiveTab('delete-product')} 
                            style={{
                                textDecoration: 'none',
                                width: '80%', 
                                padding: '2px', 
                                backgroundColor: activeTab === 'delete-product' ? 'green' : 'transparent',
                                color: activeTab === 'delete-product' ? 'white' : 'black', 
                                transition: 'color 1.0s ease',
                                borderRadius: '10px', 
                                border: 'none', 
                                cursor: 'pointer' 
                              }}
                        >
                            Elimina un articulo
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/list-order" 
                            onClick={() => setActiveTab('list-order')} 
                            style={{
                                textDecoration: 'none',
                                width: '80%', 
                                padding: '2px', 
                                backgroundColor: activeTab === 'list-order' ? 'green' : 'transparent',
                                color: activeTab === 'list-order' ? 'white' : 'black', 
                                transition: 'color 1.0s ease',
                                borderRadius: '10px', 
                                border: 'none', 
                                cursor: 'pointer' 
                              }}
                        >
                            Listar ordenes
                        </Link>
                    </li>
                    {/* Agrega más opciones aquí */}
                </ul>
            </nav>

            {/* Área de contenido */}
            <div style={{ flex: 1, padding: '10px' }}>
                <Routes>
                    <Route path="create-order" element={<CreateOrder />} />
                    <Route path="delete-order" element={<DeleteOrder />} />
                    <Route path="user-create" element={<UserCreation />} />
                    <Route path="delete-user" element={<DeleteUser />} />
                    <Route path="add-product" element={<AddProduct />} />
                    <Route path="delete-product" element={<DeleteProduct />} />
                    <Route path="list-order" element={<ListOrder />} />
                    {/* Agrega más rutas para otros componentes aquí */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
