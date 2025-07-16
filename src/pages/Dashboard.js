// src/pages/Dashboard.js
import AuthGuard from '../components/Guard/AuthGuard';
import { DEPARTMENTS, ROLE_LEVELS } from 'src/utils/constants';

const Dashboard = () => {
  
  return (
    <AuthGuard requiredDepartment={DEPARTMENTS.any} minRoleLevel={ROLE_LEVELS.employee}>
    <div>
      <div>The auth has passed.</div>
    </div>
    </AuthGuard>
  );
};

export default Dashboard;
