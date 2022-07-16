import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledInfo, Wrapper } from './UsersListItem.styles';
import { UserShape } from 'types';
import { UserContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) =>{

const {deleteUser} = useContext(UserContext)

return(
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <DeleteButton onClick={() => deleteUser(name)} />
      </p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
)
}

export default UsersListItem;
