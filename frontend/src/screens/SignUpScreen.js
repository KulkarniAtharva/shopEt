import React , {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {signup} from '../actions/userActions'
import { sign } from 'jsonwebtoken';
import { rootReducer } from '../store';


function SignUpScreen(props)
{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const userSignup = useSelector(state => state.userSignup);
    const {loading,newuserInfo,error,success} = userSignup;
    const dispatch = useDispatch();


    


    const SignupHandler = (e) =>
    {
        e.preventDefault();
        dispatch(signup(name,email,password));
    }

    useEffect(() => {

        const timeout = setTimeout(() => {
            if(newuserInfo)
        {
            props.history.push("/");
        }
            
          }, 3000);
        
        return () => {
            //
        }
    }, [newuserInfo])


    return(
        <div className="signup_container">
            <div className="signintitle"> SignUp</div>
            <div>
                {
                    loading?<div>{loading}</div>:
                    error?<div className='signupstatus'>{" Email already linked to other account, Try Again!! "}</div>:
                    success?<div className='signupsuccess'>{success}</div>:''
                }
            </div>
            <input type="text" className="name" placeholder="Name"  onChange={(e) => setName(e.target.value
                )}></input>
            <input type="email" className="email" placeholder="email" onChange={(e) => setEmail(e.target.value
                )}></input>
            <input type="password" className="password" placeholder="Password" onChange={(e) => setPassword(e.target.value
                )}></input>

            <button type='submit' className="signin_button" onClick={SignupHandler} disabled={!email || !name || !password}>Sign Up</button>

            <Link to="/signin" className="signuplink">Already a member? SignIn</Link>

        </div>
    );
}

export default SignUpScreen;