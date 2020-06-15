import axios from 'axios';

// AUTHENTICATION =====================================
/**
 * AUTH - Login request for user
 */
export const authenticateUser = async () => {
    return axios.get('/auth/google');
};

export const getUserDetails = async () => {
  return axios.get('/auth/getUserDetails');
};