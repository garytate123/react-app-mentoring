import React from "react";

function Home() {
  return (
    <div className="auth-wrapper">
        <div className="auth-inner"> 
           <div className="text-center">
              <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <div className="cover-heading front-page">
                <h2>Hello and welcome!</h2>
                <br />
                  <img className="cover-logo" src="images/logo.png" alt="logo"/>
                  <br /> 
                  <br /> 
                  <br /> 
                 <h2>Online Mentoring</h2>
                 <br /> 
                </div>
              <p >All your mentoring tools in one place</p>
              <br /> 
              <p className="lead">
                <a href="/Signup" className="btn btn-lg btn-secondary">Create a free account</a>  
              </p>
              <a href="/Login" role="button">Already signed up? LOGIN</a>
            </div>
          </div>
       </div>
    </div>
  ) 
}

export default Home;