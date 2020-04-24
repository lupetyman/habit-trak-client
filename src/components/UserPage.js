import React from 'react';

import UserHabitsContainer from '../containers/UserHabitsContainer';

const UserPage = (props) => {

  let validHabit = (
    props.userHabits.map(userHabit => userHabit.user_id === props.user.id ?
      <UserHabitsContainer key={userHabit.id}
        userHabit={userHabit}
        userHabits={props.userHabits}
        habits={props.habits}
        deleteUserHabit={props.deleteUserHabit}/> : null )
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
