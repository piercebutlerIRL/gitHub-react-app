import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
      <div className='card mt-1'>
        <h3>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            {repo.name}
          </a>
        </h3>
      </div>
    </a>
  );
};
RepoItem.protoType = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
