import React from 'react';
import { Link } from 'react-router-dom';

function SignUpScreen()
{
    return(
        <div className="signup_container">
            <div className="signintitle"> SignUp</div>
            <input type="text" className="name" placeholder="Name"></input>
            <input type="text" className="username" placeholder="Username"></input>
            <input type="password" className="password" placeholder="Password"></input>

            <button type='submit' className="signin_button">Sign Up</button>

            <Link to="/signin" className="signuplink">Already a member? SignIn</Link>

        </div>
    );
}

export default SignUpScreen;