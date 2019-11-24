import { GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR} from './actions'
const initialState={
  users:[],
  loading:false,
  error:""
}
export default (state=initialState,action) =>{
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
    return{
      ...state,
      loading:true
    };
    case GET_ALL_USERS_SUCCESS:

      return {
        ...state,
        users:action.users
        
      };
    case GET_ALL_USERS_SUCCESS:

      return {
        ...state,
        error:action.error

      }
    
  
    default: return state
    
  }
}