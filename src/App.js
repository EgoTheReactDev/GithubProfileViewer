import React, { useState } from "react";
import SearchUser from "./components/SearchUser";
import UserDetails from "./components/UserDetails";
import RepositoryList from "./components/RepositoryList";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="mainBody">
      <div className="left">
        <SearchUser setUser={setUser} />
      </div>
      <div className="right">
        {user && (
          <div className="">
            <UserDetails user={user} />
            <RepositoryList user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
