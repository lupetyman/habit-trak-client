import React from 'react';

const UserPage = (props) => {
  console.log("UserPage", props)
  return(
    <div>
      Hello, {props.user.username}
    </div>
  );
};

export default UserPage;
