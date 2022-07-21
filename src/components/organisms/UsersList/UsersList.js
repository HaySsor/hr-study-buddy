import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudenst';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
