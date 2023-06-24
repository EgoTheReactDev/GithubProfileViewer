import React, { useState } from "react";
import axios from "axios";

const SearchUser = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };


  return <div></div>;
};

export default SearchUser;
