import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useStudents } from 'hooks/useStudenst';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/DashBoard.styles';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <UsersList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
