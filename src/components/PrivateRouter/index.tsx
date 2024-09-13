import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import type { Role } from 'types/role';
import { hasAnyRoles, isAuthenticated } from 'util/auth';
import PrivateRouter from 'components/PrivateRouter';

type Props = {
  children: React.ReactNode;
  roles?: Role[];
};

const PrivateRoute = ({ children, roles = [] }: Props) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return (
      <Navigate
        to="/admin/auth/login"
        state={{ from: location }}
        replace
      />
    );
  }

  if (!hasAnyRoles(roles)) {
    return <Navigate to="/admin/products" replace />;
  }

  return <>{children}</>;
};

export const AppRoutes = ({ children }: Props) => (
  <Routes>
    <Route
      path="/some-protected-route"
      element={
        <PrivateRouter roles={['ROLE_ADMIN'] } >
          <h1>Some protected route</h1>
        </PrivateRouter>
      }
    />
    { children  }
  </Routes>
);

export default PrivateRoute