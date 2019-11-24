import Api from "../../API"

export const GET_ALL_USERS_REQUEST="GET_ALL_USERS_REQUEST";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_ERROR = "GET_ALL_USERS_ERROR";

const getAllUsersRequest = () => ({
  type: GET_ALL_USERS_REQUEST
});

const getAllUsersSuccess = users => ({
  type: GET_ALL_USERS_SUCCESS,
  users,
});

const getAllUsersError = error => ({
  type: GET_ALL_USERS_ERROR,
  error,
});

export const getAllUsersRequestThunk = id => dispatch => {
  dispatch(getAllUsersRequest());
  Api.getUser(id)
  .then(res=>{
    dispatch(getAllUsersSuccess(res.data))
  })
  .catch(error=>{
    dispatch(getAllUsersError(error))
  })
}