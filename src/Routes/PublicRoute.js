import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsOnline } from '../redux/selectors';

export const PublicRoute = ({ children }) => {
  const isOnline = useSelector(selectIsOnline);

  if (isOnline) {
    return <Navigate to={'/account'} />;
  }
  return children;
};
