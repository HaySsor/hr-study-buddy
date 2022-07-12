import React from 'react';
import PropTypes from 'prop-types';

function UserListItem({ userData: { average, name, attendace = '0%' } }) {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendace}</p>
      </div>
      <button>X</button>
    </li>
  );
}

UserListItem.prototype = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendace: PropTypes.string,
  }),
};

export default UserListItem;
