import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users, query } = githubContext;
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

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
  marginTop: '0rem',
  marginBottom: '0',
};

export default Users;
