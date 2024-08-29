import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { Role } from 'types/role';
import { hasAnyRoles, isAuthenticated } from 'util/auth';

type Props = {
  roles?: Role[];
};

const PrivateRoute = ({ roles = [] }: Props) => {
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

  return <Outlet />;
};

export default PrivateRoute;
