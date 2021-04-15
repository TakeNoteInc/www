import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const ProfilePage = (props) => {
  const { email, start, end } = props.user;
  return (
    <div>
      <p>
        Hi {email}, welcome to your profile. Your working from {start} till{" "}
        {end}.
      </p>
      <AmplifySignOut />
    </div>
  );
};

export default ProfilePage;
