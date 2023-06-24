import React, { useState } from 'react';

const SearchUser = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const userData = await response.json();
      setUser(userData);
      setError(null);
    } catch (error) {
      setUser(null);
      setError('User not found');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
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
        </div>
      )}
    </div>
  );
};

export default SearchUser;
