import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} />
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
    </div>
  );
};

export default UserDetails;
