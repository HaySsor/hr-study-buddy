import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';

function UserList() {
  return (
    <div>
      <ul>
        {users.map((userData) => {
          return (
            <UserListItem userData={userData}/>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
