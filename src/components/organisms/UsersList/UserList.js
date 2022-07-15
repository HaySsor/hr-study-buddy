import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UserListItem/UserListItem';
import { Wrapper } from './UserList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UserList = () => {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    mockAPI()
      .then((data) => {
        setUser(data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);

    setUser(filteredUsers);
  };

  return (
    <Wrapper>
      <ul>
        <h1>{isLoading ? 'Users List' : 'Loading...'}</h1>
        {users.map((userData, i) => {
          return <UserListItem deleteUser={deleteUser} key={userData.name} userData={userData} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default UserList;
