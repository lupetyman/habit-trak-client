import React from 'react';

const UserPage = (props) => {
  console.log("UserPage", props)
  return (
    <div className='user-container'>
      <div>
        Hello, {props.user.username}.
      </div>
      <div>
        Here are your currently tracked habits:
        {/* {props.userHabits[0].name} */}
      </div>
    </div>
  );
};

export default UserPage;
