import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from 'components/Navbar';
import ProductDetails from 'components/pages/ProductDetails';
import Admin from 'components/pages/Admin';
import Home from 'components/pages/Home';
import Catalogo from 'components/pages/Catalogo';
import Auth from 'components/pages/Admin/Auth';

const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalogo />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/admin/auth" element={<Navigate to="/admin/auth/login" />} />
      <Route path="/admin/auth/*" element={<Auth />} />
      <Route path="/admin" element={<Navigate to="/admin/products" />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/admin/products/:productId" element={<Admin />} />
    </Routes>
  </BrowserRouter>








);

export default AppRoutes;
