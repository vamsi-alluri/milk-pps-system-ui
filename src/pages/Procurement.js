// src/pages/Dashboard.js
import AuthGuard from '../components/Guards/AuthGuard';

const Procurement = () => {
  
  return (
    <AuthGuard requiredRole="Employee">
    <div>
      <h2>Procurement</h2>
      <div>The auth has passed.</div>
    </div>
    </AuthGuard>
  );
};

export default Procurement;
