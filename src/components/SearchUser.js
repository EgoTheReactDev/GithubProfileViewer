import React, { useState } from 'react';
import { fetchUserData, fetchUserRepositories } from '../GitHubAPI';

const SearchUser = ({ setUser }) => {
  const [username, setUsername] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const userData = await fetchUserData(username);
      const repositoriesData = await fetchUserRepositories(username);
      setUser({
        userData,
        repositoriesData,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter a GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchUser;
