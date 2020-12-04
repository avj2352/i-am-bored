import axios from 'axios';

// AUTHENTICATION =====================================
/**
 * AUTH - Login request for user
 */
export const authenticateUser = async () => {
    return axios.get('/auth/google');
};

export const getUserDetails = async () => {
  return axios.get('/auth/userDetails');
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
    return axios.get('/groups');
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
 * Update record by its id
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
export const deleteGroupById = async(id: string) => {
    return axios.delete(`/group/${id}`);
};

// TAGS RELATED =====================================

/**
 * Add a New Record
 * @param payload
 */
export const addTagDetails = async (payload: any) => {
    return axios.post('/tag', payload);
};

/**
 * Get a list of all records
 */
export const getAllTags = async () => {
    return axios.get('/tag');
};

/**
 * Get record details by Id
 * @param id
 */
export const getTagDetailsById = async (id: string) => {
    return axios.get(`/tag/${id}`);
};

/**
 * Update record by its id
 * @param id
 * @param payload
 */
export const updateTagById = async (id: string, payload: any) => {
    return axios.put(`/tag/${id}`, payload);
};

/**
 * Delete a record by Id
 * @param id
 */
export const deleteTagById = async(id: string) => {
    return axios.delete(`/tag/${id}`);
};