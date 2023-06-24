// GitHubAPI.js

const API_BASE_URL = 'https://api.github.com';

// Fetch user data from GitHub API
export const fetchUserData = async (username) => {
  const response = await fetch(`${API_BASE_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
};

// Fetch user's repositories from GitHub API
export const fetchUserRepositories = async (username) => {
  const response = await fetch(`${API_BASE_URL}/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('Failed to fetch user repositories');
  }
  return response.json();
};
