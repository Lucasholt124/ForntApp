import { Routes, Route, Outlet } from 'react-router-dom';
import Naavbar from './Naavbar';
import './style.css';

const AdminProducts = () => <h1>Product CRUD</h1>;
const AdminCategories = () => <h1>Category CRUD</h1>;
const AdminUsers = () => <h1>User CRUD</h1>;

const Admin = () => {
  return (
    <div className="admin-container">
      <Naavbar />
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<div><Outlet /></div>}>
            <Route path="products" element={<AdminProducts />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
