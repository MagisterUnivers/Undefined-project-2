import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsOnline } from '../redux/selectors';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = useSelector(selectIsOnline);
  const fromPage = location.state?.from.pathname || '/main/calendar';
  if (isOnline) {
    return <Navigate to={fromPage} />;
  }
  return children;
};
