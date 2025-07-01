// AuthGuard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ requiredRoles = [], children }) => {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://localhost:7230/api/login/userinfo', { withCredentials: true })
      .then(res => {setUser(res.data); console.log(res)})
      .catch(() => navigate('/login'))
      .finally(() => setChecked(true));
  }, []);

  if (!checked) return <div>Loading...</div>;
  if (!user) return null;

  if (
    requiredRoles.length > 0 &&
    !requiredRoles.some(role => user.roles.includes(role))
  ) {
    navigate('/unauthorized');
  }

  return typeof children === 'function' ? children(user) : children;
};

export default AuthGuard;
