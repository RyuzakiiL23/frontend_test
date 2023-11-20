import React, {useState} from 'react'


function Butt() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const userData = {
        userName: username,
        passwd: password
      };

      const response = await fetch('http://15.188.65.41/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      console.log(data);
      
      if (data.message === 'Welcome') {
          window.location.href = '/sub';
      } else {
          
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };
}

export default Butt