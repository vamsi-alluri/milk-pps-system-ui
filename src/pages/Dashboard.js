// src/pages/Dashboard.js
import AuthGuard from '../components/Guards/AuthGuard';
import DashboardNavbar from '../components/DashboardNavbar';

const Dashboard = () => {
  
  return (
    <AuthGuard requiredRole="admin">
    <div>
      <h2>Dashboard</h2>
      <DashboardNavbar></DashboardNavbar>
      <div>The auth has passed.</div>
    </div>
    </AuthGuard>
  );
};

export default Dashboard;
