import { Routes, Route } from 'react-router-dom';
import Navbar from './Naavbar';
import Users from './Users';
import PrivateRouter from 'components/PrivateRouter';

import './style.css';

const AdminProducts = () => <h1>Product CRUD</h1>;
const AdminCategories = () => <h1>Category CRUD</h1>;
const AdminUsers = () => <Users />;

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="/admin/products" element={<PrivateRouter><AdminProducts /></PrivateRouter>} />
          <Route path="/admin/categories" element={<PrivateRouter><AdminCategories /></PrivateRouter>} />
          <Route path="/admin/users" element={<PrivateRouter roles={['ROLE_ADMIN']}><AdminUsers /></PrivateRouter>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
