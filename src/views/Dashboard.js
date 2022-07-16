import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UserShape } from 'types';
import { UserContext } from 'providers/UsersProvider';

const Dashboard = () => {

  const {users} = useContext(UserContext)

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};


export default Dashboard;
