import React, { useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function Title() {
  useEffect(() => {
    const query = queryString.parse(window.location.search);

    if (query.code) {
      const fetchData = async () => {
        try {
          const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: 'Ov23li6avDdIqd41ms8P',
            client_secret: 'a492d5cf4bf5ec53be6600bfd5abf4b28407f4bc',
            code: query.code
          });

          const accessToken = queryString.parse(response.data).access_token;
          // Use accessToken to fetch user data or authenticate the user
          console.log('Access Token:', accessToken);

          // Redirect or set authentication state in your application
          // Example: window.location.href = '/dashboard';
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      };

      fetchData();
    }
  }, []);

  const handleLogin = () => {
    // Redirect user to GitHub for authentication
    window.location.href = `https://github.com/login/oauth/authorize?client_id=Ov23li6avDdIqd41ms8P&redirect_uri=http://localhost:3001/callback&scope=user`;

  };

  return (
    <div>
      <h1>Single Sign-On with GitHub</h1>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
}

export default Title;
