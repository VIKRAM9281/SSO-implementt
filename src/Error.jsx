import React from 'react';
import { useLocation } from 'react-router-dom';

function OAuthError() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const error = params.get('error');
  const errorDescription = params.get('error_description');
  const errorUri = params.get('error_uri');

  return (
    <div>
      <h2>OAuth Error</h2>
      <p>Error: {error}</p>
      <p>Error Description: {errorDescription}</p>
      {errorUri && <p>Error URI: <a href={errorUri}>{errorUri}</a></p>}
      {/* Add additional error handling or redirect logic as needed */}
    </div>
  );
}

export default OAuthError;
