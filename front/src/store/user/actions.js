
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const FETCH_CURRENT_USER_REQUEST = "FETCH_CURRENT_USER_REQUEST";
export const CREATE_USER_ERRORS = "CREATE_USER_ERRORS";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const FETCH_CURRENT_USER_SUCCESS = "FETCH_CURRENT_USER_SUCCESS";
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";


export const fetchUserRequest = user => ({
    type: FETCH_CURRENT_USER_REQUEST,
    user,
});

export const createUserErrors = errors => ({
    type: CREATE_USER_ERRORS,
    errors,
});

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user,
});
export const fetchCurrentUserSuccess = user => ({
    type: FETCH_CURRENT_USER_SUCCESS,
    user,
});
export const loginUserRequest = (user) => ({
    type: LOGIN_USER_REQUEST,
    user
});
export const updateUserRequest = (user) => ({
    type: UPDATE_USER_REQUEST,
    user
});
