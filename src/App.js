import React, { useState } from 'react';
import SearchUser from './components/SearchUser';
import UserDetails from './components/UserDetails';
import RepositoryList from './components/RepositoryList';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <SearchUser setUser={setUser} />
      {user && (
        <div>
          <UserDetails user={user} />
          <RepositoryList repositories={user.repositories} />
        </div>
      )}
    </div>
  );
};

export default App;
