import React from "react";

function Org_SideMenuDash() {
    return (


<div id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src="/images/logo.png" alt="" width="50px" height="50px" />
                    <h1>Online Mentoring</h1>
                </div>
                <i onclick="closeSidebar()" class="fa fa-times" id="sidebarIcon" aria-hidden="true"></i>
            </div>

            <div className="sidebar__menu">
                <div class="sidebar__link active_menu_link" aria-hidden="true">
                    <i class="fa fa-home text-yellow "></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2> ORGANISATION</h2>
                <div className="sidebar__link">
                    <i className="far fa-calendar-alt"></i>
                    <a href="">Calendar</a>
                </div>
                <div className="sidebar__link">
                    <i className="far fa-sticky-note"></i>
                    <a href="">Note Book</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-tasks"></i>
                    <a href="">Todo List</a>
                </div>
                
                <div className="sidebar__link">
                    <i class="fas fa-book-open"></i>
                    <a href="">Mentoring Sessions</a>
                </div>
                <div class="sidebar__link">
                    <i class="fas fa-address-card"></i>
                    <a href="">Contacts</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-file-alt"></i>
                    <a href="">Reports</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-file-alt"></i>
                    <a href="#">Policies</a>
                </div>
                <h2>MENTORS</h2>
                <div className="sidebar__link">
                    <i className="fas fa-users"></i>
                    <a href="">List of Mentors</a>
                </div>

                <h2>MENTEES</h2>
                <div className="sidebar__link">
                    <i className="fas fa-users"></i>
                    <a href="">List of Mentees</a>
                </div>

                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="fas fa-wallet"></i>
                    <a href="">Subcription</a>
                </div>
                <div className="sidebar__link">
                    <i className="far fa-user-circle"></i>
                    <a href="">Account</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="/">Log out</a>
                </div>
            </div>
            </div>


    )
        
        
    
}

export default Org_SideMenuDash;