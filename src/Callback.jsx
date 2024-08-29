import React, { useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function OAuthCallback() {
  useEffect(() => {
    const fetchAccessToken = async () => {
      const query = queryString.parse(window.location.search);

      if (query.error) {
        console.error('Access denied by user:', query.error);
        // Handle access denied error (e.g., show an error message)
        // Redirect or navigate away as needed
        // Example: history.push('/login');
      } else if (query.code) {
        try {
          const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: 'YOUR_CLIENT_ID',
            client_secret: 'YOUR_CLIENT_SECRET',
            code: query.code
          });

          const accessToken = queryString.parse(response.data).access_token;
          console.log('Access Token:', accessToken);

          // Use accessToken to fetch user data or authenticate the user
          // Example: setAccessToken(accessToken);
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      }
    };

    fetchAccessToken();
  }, []);

  return (
    <div>
      <h1>OAuth Callback Page</h1>
      {/* Add loading spinner or message if needed */}
    </div>
  );
}

export default OAuthCallback;
