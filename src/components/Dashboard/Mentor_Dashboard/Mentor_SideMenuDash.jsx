import React from "react";

function Mentor_SideMenuDash() {
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
                    <a href="Dashboard">Dashboard</a>
                </div>
                <h2> MENTOR</h2>
                <div className="sidebar__link">
                    <i className="far fa-calendar-alt"></i>
                    <a href="/dasshboard/organisation/org-calender.html">Calender</a>
                </div>
                <div className="sidebar__link">
                    <i className="far fa-sticky-note"></i>
                    <a href="/dasshboard/organisation/org-notes.html">Note Book</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-tasks"></i>
                    <a href="/dasshboard/organisation/org-todo.html">Todo List</a>
                </div>
                
                <div className="sidebar__link">
                    <i class="fas fa-book-open"></i>
                    <a href="/dasshboard/organisation/org-mentoring-sessions.html">Mentoring Sessions</a>
                </div>
                <div class="sidebar__link">
                    <i class="fas fa-address-card"></i>
                    <a href="/dasshboard/organisation/org-contacts.html">Contracts</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-file-alt"></i>
                    <a href="/dasshboard/organisation/org-reports.html">Reports</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-file-alt"></i>
                    <a href="#">Policies</a>
                </div>

                <h2>MENTEES</h2>
                <div className="sidebar__link">
                    <i className="fas fa-users"></i>
                    <a href="/dasshboard/organisation/org-list-of-mentees.html">List of Mentees</a>
                </div>

                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="fas fa-wallet"></i>
                    <a href="/dasshboard/organisation/org-subcriptions.html">Subcription</a>
                </div>
                <div className="sidebar__link">
                    <i className="far fa-user-circle"></i>
                    <a href="/dasshboard/organisation/org-account.html">Account</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="/">Log out</a>
                </div>
            </div>
            </div>
    )
}

export default Mentor_SideMenuDash;