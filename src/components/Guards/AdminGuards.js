// AdminGuard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminGuard = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/login/userinfo', { withCredentials: true })
      .then(res => {
        if (!res.data.roles.includes("Admin")) {
          navigate('/unauthorized');
        } else {
          setUser(res.data);
        }
      })
      .catch(() => navigate('/login'));
  }, []);

  return user ? children : <div>Loading...</div>;
};

export default AdminGuard;
