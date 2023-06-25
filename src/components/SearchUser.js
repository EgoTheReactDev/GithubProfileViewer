import React, { useState, useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
          throw new Error('User not found');
        }
        const userData = await userResponse.json();

        const repositoriesResponse = await fetch(userData.repos_url);
        if (!repositoriesResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const repositoriesData = await repositoriesResponse.json();

        setUser({ ...userData, repos: repositoriesData });
        setError(null);
      } catch (error) {
        setUser(null);
        setError(error.message);
        console.error(error);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter a GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {user && (
        <div className="user-card">
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.login}</h2>
          <p>Name: {user.name}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>

          {user.repos && user.repos.length > 0 ? (
            <div className="repository-list">
              <h3>Repositories:</h3>
              <ul>
                {user.repos.map((repo) => (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No repositories found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
