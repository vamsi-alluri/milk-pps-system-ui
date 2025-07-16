import { useAuth } from 'src/utils/AuthContext'

const ViewProfileInfo = () => {
  const { userInfo } = useAuth();

  return (
    <div>
      <p><strong>Username:</strong> {userInfo.username}</p>
      <p><strong>Departments:</strong></p>
      <ul>
        {userInfo?.accessScopes?.map((scope, index) => (
          <li key={index}>
            {scope.DepartmentName}
          </li>
        )) ?? <li>No access scopes</li>}
      </ul>
    </div>
  );
};

export default ViewProfileInfo;
