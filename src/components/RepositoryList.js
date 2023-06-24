import React from 'react';

const RepositoryList = ({ repositories }) => {
  return (
    <div>
      <h3>Repositories:</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            &nbsp; - &nbsp; Stars: {repo.stargazers_count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
