import { USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants";

function userSigninReducer(state={},action)
{
    switch(action.type)
    {
        case USER_SIGNIN_REQUEST:
        {
            return {loading:true}


        }
        case USER_SIGNIN_SUCCESS:
            {
                return {loading:false , userInfo : action.payload};
            }
        case USER_SIGNIN_FAILURE:
            {
                return {loading:false,error:action.payload}
            }
        default:
            {
                return state;
            }
    }
}

function userSignupReducer(state={},action)
{
    switch(action.type)
    {
        case USER_SIGNUP_REQUEST:
        {
            return {loading:true}


        }
        case USER_SIGNUP_SUCCESS:
            {
                return {loading:false , success:"Sign Up Successful !" , signupInfo : action.payload};
            }
        case USER_SIGNUP_FAILURE:
            {
                return {loading:false, error:action.payload}
            }
        default:
            {
                return state;
            }
    }
}

export {userSigninReducer,userSignupReducer}