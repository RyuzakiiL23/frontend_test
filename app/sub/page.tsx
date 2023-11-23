'use client'
import React, { useState } from 'react';

function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const userData = {
        userName: username,
        passwd: password
      };

      const response = await fetch('https://api.ryu23.tech/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Submit Button Test</h1>
      <input
        type="text"
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='button' onClick={handleSubmit}>Submit</button>
      <br /><br />
    </div>
  );
}

export default Page;
