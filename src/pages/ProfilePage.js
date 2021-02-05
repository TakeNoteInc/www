import React from "react";

const ProfilePage = (props) => {
  const { user } = props;
  return (
    <div>
      <p>Hi {user.attributes.email}, welcome to your profile.</p>
    </div>
  );
};

export default ProfilePage;
