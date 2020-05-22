export const CREATE_PROJECT = "CREATE_PROJECT";
export const UPDATE_PROJECT_REQUEST = "UPDATE_PROJECT_REQUEST";

export const createRequestProject = project => ({
    type: CREATE_PROJECT,
    project,
});
export const updateRequestProject = (formdata, id) => ({
    type: UPDATE_PROJECT_REQUEST,
    formdata, id,
});

