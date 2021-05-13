import React from 'react';

function Login() {
    return (
        <main>
            <div class="homepage-box">
                <form>
                    <div className="signup-form-heading">
                        <h2>Online Mentoring</h2>
                        <h3>Login in!</h3>
                        <br />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" required /> 
                    </div>
                    <div className="form-group">    
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" required /> 
                    </div>
                    <div className="forgot-password">
                        <a href="/">Forget Password!</a>
                        <br />
                        <br />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block">Take me to my dashboard!</button>
                    </div>
                    <div className="forgot-password">
                        <a href="/Dashboard">Go to DASHBOARD</a>
                    </div>
                </form>
            </div>
        </main>
      )
}


export default Login;