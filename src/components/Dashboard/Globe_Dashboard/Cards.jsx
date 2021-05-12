import React from "react";

function Cards() {
    return (
    <div className="main__container">
        <div className="main__cards">
            <div className="card">
                <i className="fas fa-users text-red" />
                    <div className="card_inner">
                        <p className="text-primary-p">Number of Mentors</p>
                        <span className="font-bold text-title">20</span>
                    </div>
            </div>

            <div className="card">
                <i className="fas fa-users text-green"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Number of Mentees</p>
                        <span className="font-bold text-title">26</span>
                    </div>
            </div>

            <div className="card">
                <i className="fas fa-tasks text-yellow"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Todo List</p>
                        <span className="font-bold text-title">11</span>
                    </div>
            </div>

            <div className="card">
                <i className="far fa-comments text-lightblue"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Messages</p>
                        <span className="font-bold text-title">1</span>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Cards;