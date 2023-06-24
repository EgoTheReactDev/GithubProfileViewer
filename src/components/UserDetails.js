import React from 'react';

const UserDetails = ({ user }) => {
  const { userData } = user;

  return (
    <div className="user-card">
      <img src={userData.avatar_url} alt={userData.login} />
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
    </div>
  );
};

export default UserDetails;
