import React, { useState } from "react";
import axios from "axios";

const SearchUser = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return <div></div>;
};

export default SearchUser;
