import { ReactComponent as AuthImage } from 'assets/imagens/Login.svg';
import { Routes, Route, Outlet } from 'react-router-dom';
import Login from './Login';
import './style.css';

const AuthLogin = () => <Login />;
const AuthSignup = () => <h1>Card de Signup</h1>;
const AuthRecover = () => <h1>Card de Recover</h1>;

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulgue seus produtos no DS Catalog</h1>
        <p>Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.</p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Routes>
          <Route path="/*" element={<div><Outlet /></div>}/>
          <Route path="login" element={<AuthLogin />} />
          <Route path="signup" element={<AuthSignup />} />
          <Route path="recover" element={<AuthRecover />} />
        </Routes>
      </div>
    </div>
  );
};


export default Auth;
