import React from 'react';
import CustomTabs from 'src/components/CustomTabs';
import ViewProfileInfo from 'src/components/ViewProfileInfo';
import ChangePasswordForm from 'src/components/ChangePasswordForm';

const ProfilePage = () => {
  const tabs = [
    {
      key: 'info',
      title: 'View Info',
      component: <ViewProfileInfo />,
    },
    {
      key: 'password',
      title: 'Change Password',
      component: <ChangePasswordForm />,
    },
  ];

  return <CustomTabs defaultKey="info" tabs={tabs} />;
};

export default ProfilePage;
