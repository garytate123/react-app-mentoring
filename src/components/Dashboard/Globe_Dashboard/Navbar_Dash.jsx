import React from "react";

function Navbar_Dash() {
    return (     
<nav className="dashboard-navbar" >
                <div className="dashboard-nav_icon " onclick="toggleSidebar()">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="dashboard-navbar__left">
                    <a className="active_link" href="#">Dashboard</a>
                </div>
                <div className="dashboard-navbar__right">
                    <div className="dashboard-time_date">
                        <p>Time:<span id="time"></span> &nbsp; &nbsp; Date:<span id="date"></span></p>
                    </div>
                </div>
            </nav>
        )}

export default Navbar_Dash;