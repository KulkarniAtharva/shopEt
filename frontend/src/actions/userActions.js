import axios from "axios";
import Cookie from 'js-cookie';
import { USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants";

const signin = (email,password) => async (dispatch) => {
    dispatch({type:USER_SIGNIN_REQUEST, payload:{email,password}});

    try{
        const {data} = await axios.post("/api/users/signin",{email,password});
        if(data.msg)
       {
           throw {message:data.msg};
       }
        dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
        Cookie.set('userInfo',JSON.stringify(data));
    }
    catch(error)
    {
        dispatch({type: USER_SIGNIN_FAILURE,payload:error.message});
    }
}

const signup = (name,email,password) => async (dispatch) => {

    dispatch({type:USER_SIGNUP_REQUEST, payload:{name,email,password}});

    try{
       const {data} = await axios.post("/api/users/signup" , {name,email,password});
       if(data.msg)
       {
           throw {message:data.msg};
       }
       dispatch({type:USER_SIGNUP_SUCCESS,payload:data});
       Cookie.set("newuserInfo",JSON.stringify(data));
       
    }
    catch(error)
    {
        dispatch({type:USER_SIGNUP_FAILURE,payload:error.message});
    }
    
}

export {signin,signup}