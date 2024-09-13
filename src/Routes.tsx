import Navbar from 'components/Navbar';
import Home from 'components/pages/Home';
import ProductDetails from 'components/pages/ProductDetails';
import Auth from 'components/pages/Admin/Auth';
import Admin from 'components/pages/Admin';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Catalogo from 'components/pages/Catalogo';

type Props = {
  children?: React.ReactNode;
};

const AdminWrapper = ({ children }: Props) => (
  <>
    <Navbar />
    <div className="admin-container">{children}</div>
  </>
);

const RoutesComponent = ({ children }: Props) => (
  <Router>
    <AdminWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalogo />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/admin/auth" element={<Auth />} />
        <Route path="/admin/*" element={<Admin roles={['ROLE_ADMIN']} children={children} />} />
        <Route path="/admin/auth/login" element={<Navigate to="/admin/auth" replace />} />
        <Route path="/admin/products" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminWrapper>
  </Router>
);

export default RoutesComponent;
