// src/pages/Dashboard.js
import AuthGuard from '../components/Guard/AuthGuard';
import { DEPARTMENTS, ROLE_LEVELS } from 'src/utils/constants';

const Procurement = () => {
  
  return (
    <AuthGuard requiredDepartment={DEPARTMENTS.Procurement} minRoleLevel={ROLE_LEVELS.employee}>
    <div>
      <h2>Procurement</h2>
      <div>The auth has passed.</div>
    </div>
    </AuthGuard>
  );
};

export default Procurement;
