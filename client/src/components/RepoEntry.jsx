import React from 'react';

const RepoEntry = (props) => {
  return (
    <div>
      <ul>
        <li>RepoID: {props.repo.id}</li>
  <li>{props.repo.name} by {props.repo.owner}</li>
  <li>Forks count: {props.repo.forks_count}</li>
      </ul>
    </div>
  )
}

export default RepoEntry