import React from 'react';

import UserHabitsContainer from '../containers/UserHabitsContainer';

const UserPage = (props) => {
  console.log("User Page", props)

  let validHabit = (
    props.userHabits.map(userHabit =>
      <UserHabitsContainer key={userHabit.id}
        user={props.user}
        userHabit={userHabit}
        userHabits={props.userHabits}
        deleteUserHabit={props.deleteUserHabit}/> )
      );

  return (

    <div className='user-container'>
      <div className='user-profile'>
        <h3>Hello, {props.user.username}.</h3>
        <h5>Here are your currently tracked habits:</h5>
      </div>
      <div className='userhabits-container'>
          {validHabit}
      </div>
    </div>
  );
};

export default UserPage;
