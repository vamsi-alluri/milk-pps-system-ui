import AuthGuard from "src/components/Guard/AuthGuard";
import { DEPARTMENTS, ROLE_LEVELS } from "src/utils/constants";

const Administration = () => {

  return(
    <AuthGuard requiredDepartment={DEPARTMENTS.admin} minRoleLevel={ROLE_LEVELS.admin}>
      <div className="administration"> 
        <strong>Administration Page</strong>
      </div>
    </AuthGuard>
  )
};

export default Administration;