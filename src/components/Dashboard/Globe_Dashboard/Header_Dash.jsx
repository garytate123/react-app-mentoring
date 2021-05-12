import React from "react";




function Header_Dash() {
    return (     
        
<nav className="navbar" >
                <div className="nav_icon" onclick="toggleSidebar()">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="navbar__left">
                    <a className="active_link" href="#">Dashboard</a>
                </div>
                <div className="navbar__right">
                    <div className="time_date">
                        <p>Time:<span id="time"></span> &nbsp; &nbsp; Date:<span id="date"></span></p>
                    </div>
                </div>
            </nav>

            
       
        
        )}

export default Header_Dash;