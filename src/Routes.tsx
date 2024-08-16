import Navbar from "components/Navbar";
import Admin from "components/pages/Admin";
import Catalogo from "components/pages/Catalogo";
import Home from "components/pages/Home";
import ProductDetails from "components/pages/ProductDetails";
import { BrowserRouter, Routes as AppRoutes, Route, Navigate } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalogo />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/admin" element={<Navigate to="/admin/products" />}  />
        <Route path="/admin/*" element={<Admin />} />
      </AppRoutes>
    </BrowserRouter>
  );
}

export default Routes;