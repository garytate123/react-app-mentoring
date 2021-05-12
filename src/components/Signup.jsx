
import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };
       
        axios.post('http://localhost:3000/Signup', data).then (
            res => {
                console.log(res)
            }
        ).catch(
            err =>{
                console.log(err);
            }
        )
    };


render() { 
    return (
        <form onSubmit={this.handleSubmit}>
        <div className="signup-form-heading">
        <h2>Online Mentoring</h2>
        <h3 >Sign up!</h3>
        </div>
        <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder="First Name" autoFocus
            onChange={e => this.firstName = e.target.value} /> 
        </div>
        <div className="form-group">
            <label>First Last</label>
            <input type="text" className="form-control" placeholder="First Last" 
            onChange={e => this.lastName = e.target.value}  /> 
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email" 
            onChange={e => this.email = e.target.value}  /> 
        </div>
        <div className="form-group">    
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" 
                onChange={e => this.password = e.target.value} 
            /> 
        </div>
        <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm Password" 
                onChange={e => this.confirmPassword = e.target.value} 
            /> 
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-block">Sign Me Up!</button>
        </div>
    </form>      
)
}
}