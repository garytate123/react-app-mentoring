import React from 'react';

function Signup() {
    return (
        <form>
        <div className="signup-form-heading">
        <h2>Online Mentoring</h2>
        <h3 >Sign up!</h3>
        </div>
        <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder="First Name" required autoFocus /> 
        </div>
        <div className="form-group">
            <label>First Last</label>
            <input type="text" className="form-control" placeholder="First Last" required /> 
        </div>
        <div className="form-group">    
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" required/> 
        </div>
        <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm Password" required/> 
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-block">Sign Me Up!</button>
        </div>
    </form>
)
}

export default Signup;