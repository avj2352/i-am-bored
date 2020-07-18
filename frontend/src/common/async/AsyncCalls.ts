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

// GROUPS RELATED =====================================

/**
 * Add a New Group
 * @param payload
 */
export const addGroupDetails = async (payload: any) => {
  return axios.post('/group', payload);
};

/**
 * Get a list of all Groups
 */
export const getAllGroups = async () => {
    return axios.get('/group');
};

/**
 * Get a list of all Filtered (w/o premium) Groups
 */
export const getAllFilteredGroups = async () => {
    return axios.get('/group?q=filtered');
};

/**
 * Get group details by Id
 * @param id
 */
export const getGroupDetailsById = async (id: string) => {
    return axios.get(`/group/${id}`);
};

/**
 * Add a New Group
 * @param id
 * @param payload
 */
export const updateGroupById = async (id: string, payload: any) => {
    return axios.put(`/group/${id}`, payload);
};

/**
 * Delete a Group by Id
 * @param id
 */
export const deleteCardById = async(id: string) => {
    return axios.delete(`/group/${id}`);
};