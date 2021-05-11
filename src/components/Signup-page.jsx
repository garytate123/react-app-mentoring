import React from 'react';

function Signup() {
    return <div>
        <h1>Welcome to Online Mentoring. Sign up and lets get started.</h1>
        <form className="form-signin" action='/Signup-page' method='POST'>
        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Sign Up!</h1>
        <label for="email" className="sr-only">Email address</label>
        <input type="email" id="email" className="form-control" placeholder="Email address" name="email" required autofocus />
        <label for="password" className="sr-only">Password</label>
        <input type="password" id="password" className="form-control" placeholder="Password" name="password" required />
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign me up!</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2021 by Gary Tate</p>
        </form>
    </div>
}

export default Signup;