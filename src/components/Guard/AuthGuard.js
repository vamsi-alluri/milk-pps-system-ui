import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { DEPARTMENTS } from 'src/utils/constants';
import Unauthorized from 'src/pages/unauthorized';
import { useAuth } from 'src/utils/AuthContext';

const AuthGuard = ({ requiredDepartment, minRoleLevel = 0, children }) => {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const navigate = useNavigate();
  const { userInfo, isLoggedIn} = useAuth();

  useEffect(() => {
    let isMounted = true;

    const processUserInfo = () => {
      const match = userInfo.accessScopes.find(scope =>
        (scope.DepartmentName?.toUpperCase() === requiredDepartment?.toUpperCase() || scope.DepartmentName?.toUpperCase() === DEPARTMENTS.admin.toUpperCase()) &&
        scope.RoleLevel >= minRoleLevel &&
        scope.RoleLevel > 0 &&
        scope.RoleLevel < 6
      );

      if (isMounted) {
        setUser(userInfo);
        setAccessGranted(!!match);
      }
    };

    if (isLoggedIn()) {
      processUserInfo();
      setChecked(true);
    } else {
      // navigate("/login");
      setChecked(true);
    }

    return () => { isMounted = false; };
  }, [requiredDepartment, minRoleLevel, navigate, userInfo, isLoggedIn]);

  if (!checked) return <LinearProgress />;
  if (!accessGranted) return <Unauthorized />;
  
  return typeof children === 'function' ? children(user) : children;
};

export default AuthGuard;
