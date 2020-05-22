export const CREATE_EXPERIENCE_REQUEST = 'CREATE_EXPERIENCE_REQUEST';
export const CREATE_LIST_EXPERIENCE_REQUEST = 'CREATE_LIST_EXPERIENCE_REQUEST';
export const UPDATE_EXPERIENCE_REQUEST = 'UPDATE_EXPERIENCE_REQUEST';

export const createRequestExperience = (experience) => ({
  type: CREATE_EXPERIENCE_REQUEST,
  experience,
});
export const createRequestListExperience = (listExperience) => ({
  type: CREATE_LIST_EXPERIENCE_REQUEST,
  listExperience,
});
export const updateRequestExperience = (experience, id) => ({
  type: UPDATE_EXPERIENCE_REQUEST,
  experience,
  id,
});
