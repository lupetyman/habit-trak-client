import React from 'react';

import UserHabit from './UserHabit';

const UserPage = (props) => {
  console.log("UserPage", props)

  let validHabit = (
    props.userHabits.map(userHabit => userHabit.user_id === props.user.id ?
      <UserHabit key={userHabit.id}
        userHabit={userHabit}
        userHabits={props.userHabits}
        habits={props.habits}/> : null )
  );

  return (
    <div className='user-container'>
      <div>
        Hello, {props.user.username}.
      </div>
      <div>
        Here are your currently tracked habits:
          {validHabit}
      </div>
    </div>
  );
};

export default UserPage;
