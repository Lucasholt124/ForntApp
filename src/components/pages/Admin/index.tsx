import { Routes, Route } from 'react-router-dom';
import Navbar from './Naavbar';
import Users from './Users';
import PrivateRouter from 'components/PrivateRouter';

import './style.css';
import Products from './Products';

const AdminProducts = () => Products();
const AdminCategories = () => <h1>Category CRUD</h1>;
const AdminUsers = () => <Users />;

type Props = {
  children: React.ReactNode;
  roles?: string[];
};


const Admin = ({ children, roles }: Props) => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="/admin/products" element={<PrivateRouter><AdminProducts /></PrivateRouter>} />
          <Route path="/admin/categories" element={<PrivateRouter><AdminCategories /></PrivateRouter>} />
          <Route path="/admin/users" element={<PrivateRouter roles={['ROLE_ADMIN'] }><AdminUsers /></PrivateRouter>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;