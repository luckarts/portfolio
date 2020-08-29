export const FETCH_LIST_PROJETS = "FETCH_LIST_PROJETS";
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";

export const fetchListProjets = () => ({
    type: FETCH_LIST_PROJETS
})

export const loginUserRequest = user => ({
    type: LOGIN_USER_REQUEST,
    user,
});
