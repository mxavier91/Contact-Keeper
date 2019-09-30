import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.default.header.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
