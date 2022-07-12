import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper } from './UserList.styles';

function UserList() {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => {
          return <UserListItem userData={userData} />;
        })}
      </ul>
    </Wrapper>
  );
}

export default UserList;
