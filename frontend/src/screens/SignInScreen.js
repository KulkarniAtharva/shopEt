import React from 'react';
import { Link } from 'react-router-dom';

function SignInScreen()
{
    return(
        <div className="signin_container">
            <div className="signintitle"> SignIn</div>
            <input type="text" className="username" placeholder="Username"></input>
            <input type="password" className="password" placeholder="Password"></input>

            <button type='submit' className="signin_button">Sign In</button>

            <Link to="/signup" className="signuplink">Not a User? SignUp</Link>

        </div>
    );
}

export default SignInScreen;