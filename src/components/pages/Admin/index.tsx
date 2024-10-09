import { Routes, Route } from 'react-router-dom';
import Navbar from './Naavbar';
import Users from './Users';
import PrivateRoute from 'components/PrivateRouter';
import Products from './Products';

import './style.css';


const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="/admin/products" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="/admin/categories" element={<PrivateRoute><h1>Category CRUD</h1></PrivateRoute>} />
          <Route path="/admin/users" element={<PrivateRoute roles={['ROLE_ADMIN']}><Users /></PrivateRoute>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
