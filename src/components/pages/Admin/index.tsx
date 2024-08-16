import { Routes, Route } from 'react-router-dom';
import Naavbar from './Naavbar';
import './style.css';



const Admin = () => {
  return (
    <div className="admin-container">
      <Naavbar />
    <div className="admin-content">
        <Routes>
            <Route path="/admin/products" element={<h1>Produtos</h1> } />
            <Route path="/admin/categories" element={<h1>Categorias</h1>} />
            <Route path ="/admin/users" element={<h1>Usuários</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin
