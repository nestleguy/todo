import React from 'react';
import { Link } from 'react-router-dom';
import '../style/login.css'; 

function Login() {
    return (
        <div className='bodyLogin'>
        <div class="mainLogin">
        <input type="checkbox" id="chk" aria-hidden="true"></input>
        <div class="signup">
            <form>
                <label for="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="User name" required=""></input>
                <input type="email" name="email" placeholder="Email" required=""></input>
                <input type="password" name="pswd" placeholder="Password" required=""></input>
                <Link to="/" className="button" >Sing in</Link>
            </form>
        </div>
        <div class="login">
            <form>
                <label for="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" required=""></input>
                <input type="password" name="pswd" placeholder="Password" required=""></input>
                <Link to="/" className="button" >Login</Link>
            </form>
        </div>
    </div>
    </div>

    )
}
export default Login;