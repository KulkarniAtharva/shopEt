import { React,useEffect,useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import { userSigninReducer } from '../reducers/userReducer';

function SignInScreen(props)
{

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userSignin = useSelector(state => state.userSignin);

    const {loading , userInfo , error} = userSignin;

    const dispatch = useDispatch();

    useEffect(() => {
        
        if(userInfo)
        {
            props.history.push("/")
        }
        return () => {
            //
        }
    }, [userInfo])


    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(email,password));
    }
    return(
        <form onSubmit={submitHandler}>
        <div className="signin_container">
            <div className="signintitle"> SignIn</div>
            <input type="text" className="username" placeholder="Username"></input>
            <input type="password" className="password" placeholder="Password"></input>

            <button type='submit' className="signin_button">Sign In</button>

            <Link to="/signup" className="signuplink">Not a User? SignUp</Link>

        </div>
        </form>
    );
}

export default SignInScreen;