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


export const addGroupDetails = async (payload: any) => {
  return axios.post('/group', payload);
};

export const getAllCardList = async () => {
    return axios.get('/group');
};

export const deleteCardById = async(id: string) => {
    return axios.delete(`/group/${id}`);
};