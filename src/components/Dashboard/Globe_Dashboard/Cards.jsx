import React from "react";

function Cards() {
    return (
    <div className="dashboard-main__container">
        <div className="dashboard-main__cards">
            <div className="dashboard-card">
                <i className="fas fa-users text-red" />
                    <div className="dashboard-card_inner">
                        <p className="dashboard-text-primary-p">Mentors</p>
                        <span className="font-bold text-title">20</span>
                    </div>
            </div>

            <div className="dashboard-card">
                <i className="fas fa-users text-green"></i>
                    <div className="dashboard-card_inner">
                        <p className="dashboard-text-primary-p">Mentees</p>
                        <span className="font-bold text-title">26</span>
                    </div>
            </div>

            <div className="dashboard-card">
                <i className="fas fa-tasks text-yellow"></i>
                    <div className="dashboard-card_inner">
                        <p className="dashboard-text-primary-p">Todo List</p>
                        <span className="font-bold text-title">11</span>
                    </div>
            </div>

            <div className="dashboard-card">
                <i className="far fa-comments text-lightblue"></i>
                    <div className="dashboard-card_inner">
                        <p className="dashboard-text-primary-p">Messages</p>
                        <span className="font-bold text-title">1</span>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Cards;