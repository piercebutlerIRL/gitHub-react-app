import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading, query }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {users.length > 0 && (
          <div className='results-stats'>
            {users.length} results for {query}
          </div>
        )}
        <div style={userStyle}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

Users.protoTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
  marginTop: '0rem',
  marginBottom: '0',
};

export default Users;
