import React, { useState,useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/students')
          .then(({data})=>setUsers(data.students))
  },[])

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };
  return (
    <UserContext.Provider
      value={{
        users, //te zmienne nie mają wartości bo nazywają się tak samo jak zmienne z np sate czy funkje jak chcemy inne to trzeba np np.student: users <- to jest zmienna ze stanu
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UsersProvider;
