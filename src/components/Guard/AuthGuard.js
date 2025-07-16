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
  const { isLoggedIn, userInfo } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const processUserInfo = () => {
      const match = userInfo.accessScope.find(scope =>
        (scope.departmentName?.toUpperCase() === requiredDepartment?.toUpperCase() || scope.departmentName?.toUpperCase() === DEPARTMENTS.admin.toUpperCase()) &&
        scope.roleLevel >= minRoleLevel &&
        scope.roleLevel > 0 &&
        scope.roleLevel < 6
      );
      console.log(match);

      if (isMounted) {
        setUser(userInfo);
        setAccessGranted(!!match);
      }
    };

    if (isLoggedIn) {
      processUserInfo();
      setChecked(true);
    } else {
      navigate("/login");
      setChecked(true);
    }

    return () => { isMounted = false; };
  }, [requiredDepartment, minRoleLevel, navigate, userInfo, isLoggedIn]);

  if (!checked) return <LinearProgress />;
  if (!accessGranted) return <Unauthorized />;
  
  return typeof children === 'function' ? children(user) : children;
};

export default AuthGuard;
