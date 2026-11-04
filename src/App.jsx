
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
      setMessage("");
    } else {
      setMessage("Invalid Username or Password!");
      setLoggedIn(false);
    }
  }

  if (loggedIn) {
    return (
      <div>
        <h1>Welcome Page</h1>
        <h2>Welcome {username}!</h2>
        <button onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login Page</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login</button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;
