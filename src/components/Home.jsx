import React from "react";

function Home() {
  return (
  
    <main>
      <div class="homepage-box">
        <h2>Online Mentoring App</h2>
        <img className="homepage-logo" src="images/logo.png" alt="logo" />
        <p>All your mentoring tools in one place</p>
        <br />
        <p className="lead">
          <a href="/Signup" className="btn btn-lg btn-secondary">Create a free account</a>
        </p>
        <a href="/Login" role="button">Already signed up? LOGIN</a>
      </div>
    </main>
  
  ) 
}

export default Home;