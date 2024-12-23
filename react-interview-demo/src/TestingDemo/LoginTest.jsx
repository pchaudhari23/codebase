import React, { useState } from "react";

const LoginTest = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(initialState);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userCredentials);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          required
          maxLength={8}
          value={userCredentials.username}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          required
          minLength={8}
          value={userCredentials.password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">LoginTest</button>
    </form>
  );
};

export default LoginTest;
