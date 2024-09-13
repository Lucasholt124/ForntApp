import { Role } from 'types/role';
import { getTokenData } from './token';

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return tokenData ? tokenData.exp * 1000 > Date.now() : false;
};



export const hasAnyRoles = (roles: Role[]): boolean => {
  if (roles.length === 0) {
    return true;
  }

  const tokenData = getTokenData();

  return tokenData
    ? roles.some((role) => tokenData.authorities.includes(role))
    : false;
};
