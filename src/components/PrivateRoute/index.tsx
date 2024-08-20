import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';

type Role = string;

type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};

const hasAnyRoles = (roles: Role[]): boolean => {
  const userRoles = ['admin'];
  return roles.some(role => userRoles.includes(role));
};

const PrivateRoute = ({ children, roles = [] }: Props) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Usuário não autenticado, redirecione para a página de login
    return <Navigate to="/admin/auth/login" state={{ from: location }} />;
  }

  if (!hasAnyRoles(roles)) {
    // Usuário não tem as funções necessárias, redirecione para a página padrão
    return <Navigate to="/admin/products" />;
  }

  // Usuário autenticado e com as funções necessárias, renderize os filhos
  return <>{children}</>;
};

export default PrivateRoute;
