import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'components/pages/Home';
import Catalog from 'components/pages/Catalogo';
import Admin from 'components/pages/Admin';
import Auth from 'components/pages/Admin/Auth';
import ProductDetails from 'components/pages/ProductDetails';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/admin/auth" element={<Auth />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/auth/login" element={<Navigate to="/admin/auth" />} />
      <Route path="/admin/products" element={<Navigate to="/admin" />} />
    </Routes>
  </Router>
);

export default AppRoutes;
