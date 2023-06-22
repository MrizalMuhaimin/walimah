import { Navigate } from 'react-router-dom';

export default function PrivateRoute ({ element, permission = true }) {
  const token = null;
  return token ? permission ? element : <Navigate to="/" /> : <Navigate to="/login" />;
}