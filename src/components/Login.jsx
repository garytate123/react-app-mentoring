import React from 'react';

function Login() {
    return (
      <form>
            <div className="signup-form-heading">
                <h2>Online Mentoring</h2>
                    <h3>Login in!</h3>
                    <br />
                    <img className="cover-logo" src="images/logo.png" alt="logo"/>
            </div>
            

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email" required /> 
        </div>
        <div className="form-group">    
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" required 
            /> 
        </div>

        <div className="forgot-password">
            <a href="/">Forget Password!</a>
            <br />
            <br />
            <a href="/Dashboard">Go to DASHBOARD</a>
        </div>
      
    </form>      
)
}


export default Login;