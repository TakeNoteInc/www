import React from "react";

const ProfilePage = (props) => {
  const { email, start, end } = props.user;
  return (
    <div>
      <p>
        Hi {email}, welcome to your profile. Your working from {start} till{" "}
        {end}.
      </p>
    </div>
  );
};

export default ProfilePage;
