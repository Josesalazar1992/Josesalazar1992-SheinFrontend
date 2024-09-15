import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateOrder from './Createorder';
import DeleteOrder from './Deleteorder';
import UserCreation from './Usercreation';
import DeleteUser from './Deleteuser';
import AddProduct from './Addproduct';
import DeleteProduct from './Deleteproduct';
// Importa otros componentes aquí

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('create-order');

    return (
        <div style={{ display: 'flex' }}>
            {/* Barra lateral */}
            <nav style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>
                        <Link 
                            to="/dashboard/create-order" 
                            onClick={() => setActiveTab('create-order')} 
                            style={{ textDecoration: 'none', color: activeTab === 'create-order' ? 'blue' : 'black' }}
                        >
                            Crea una orden
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/delete-order" 
                            onClick={() => setActiveTab('delete-order')} 
                            style={{ textDecoration: 'none', color: activeTab === 'delete-order' ? 'blue' : 'black' }}
                        >
                            Borra una orden
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/user-create" 
                            onClick={() => setActiveTab('user-create')} 
                            style={{ textDecoration: 'none', color: activeTab === 'user-create' ? 'blue' : 'black' }}
                        >
                            Agrega un cliente
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/delete-user" 
                            onClick={() => setActiveTab('delete-user')} 
                            style={{ textDecoration: 'none', color: activeTab === 'delete-user' ? 'blue' : 'black' }}
                        >
                            Elimina un cliente
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/add-product" 
                            onClick={() => setActiveTab('add-product')} 
                            style={{ textDecoration: 'none', color: activeTab === 'add-product' ? 'blue' : 'black' }}
                        >
                            Agrega un producto
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/dashboard/delete-product" 
                            onClick={() => setActiveTab('delete-product')} 
                            style={{ textDecoration: 'none', color: activeTab === 'delete-product' ? 'blue' : 'black' }}
                        >
                            Elimina un articulo
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
                    {/* Agrega más rutas para otros componentes aquí */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
