import React, { useContext } from 'react';
import UserContext from '../Contexts/User';
import {Link} from "react-router-dom";
const Profile = () => {
  const user = useContext(UserContext)
  return (
    <div>
      {(user === "") ? <Link to="/login">Please Login</Link> : user}
    </div>
  );
};

export default Profile;
