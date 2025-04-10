import axios from 'axios';

// Create a new instance of axios with default headers set up
const api = axios.create({
    baseURL: 'http://your-api-url.com', // Replace this with your backend URL
    headers: {
        common: { Authorization: 'Bearer ' } // This will be used for access tokens
    }
});

// Function to refresh or exchange tokens
async function refreshToken() {
    try {
        const response = await axios.post('/refresh-token', { 
            // Send your refresh token here, this is an example
            refreshToken: 'your-refresh-token-here' 
        }, { headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });

        localStorage.setItem('accessToken', response.data.accessToken);
        api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;
    } catch (error) {
        console.error(error); // Handle the error
    }
}

// Usage example for axios with default headers set up and token refresh functionality
api.get('/some/endpoint')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        if (error.response.status === 401) { // If access token has expired or is invalid
            refreshToken();
            api.get('/some/endpoint').then((response) => console.log(response)); // Try the request again after refreshing the token
        } else {
            console.error(error);
        }
    });


// Example to save and retrieve an access token
localStorage.setItem('accessToken', 'your-access-token');

const storedAccessToken = localStorage.getItem('accessToken');
console.log(storedAccessToken); // Outputs: your-access-token

// Example to refresh or exchange a token (same as above)
async function refreshToken() {
    try {
        const response = await axios.post('/refresh-token', { 
            refreshToken: 'your-refresh-token-here' 
        }, { headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });

        localStorage.setItem('accessToken', response.data.accessToken);
    } catch (error) {
        console.error(error); // Handle the error
    }
}


// Example in axios interceptor
axios.interceptors.push({
  request: (config) => {
      const accessToken = localStorage.getItem('accessToken');
      
      if (accessToken && config.headers['Authorization']) {
          // If the access token has expired, send a 401 response which we can catch and refresh the token
          api.get('/refresh-token')
              .then((response) => {
                  localStorage.setItem('accessToken', response.data.accessToken);
                  config.headers['Authorization'] = 'Bearer ' + response.data.accessToken;
              })
              .catch((error) => console.error(error));
      }
      
      return config;
  }
});


// Catching errors for token refresh and other requests
.catch((error) => {
  if (error.response.status === 401 || error.code === 'ETIMEDOUT') { // If access token has expired or is invalid, or if a timeout occurred
      refreshToken();
      api.get('/some/endpoint').then((response) => console.log(response)); // Try the request again after refreshing the token
  } else {
      console.error(error);
  }
});


// Saving a refresh token
localStorage.setItem('refreshToken', 'your-refresh-token');

// Example to retrieve a stored access token or refresh token
const storedRefreshToken = localStorage.getItem('refreshToken');
console.log(storedRefreshToken); // Outputs: your-refresh-token

// Handling expired tokens
if (storedAccessToken && isAccessTokenExpired()) {
    refreshToken();
}