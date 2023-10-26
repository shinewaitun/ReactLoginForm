import React from 'react'
import loginPhoto from '../assets/Privacy policy-rafiki.png'

function Login() {
  return (
    <main>
        <div className="left container">
            <img className="image" src={loginPhoto} alt="" />
        </div>
        <div className="right container">
            <form id="login-form" action="#">
                <h2>Admin Sign In</h2>
                <div>
                    <label for="email">Email :</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label for="password">Password :</label>
                    <input type="password" id="password"/>
                </div>
                <div id="remember-me-con">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <div id="button-con">
                    <button type="submit">Login</button>
                </div>
                <a href="#" id="forgot-password">Forgot password</a>
            </form>
        </div>
    </main>
  )
}

export default Login