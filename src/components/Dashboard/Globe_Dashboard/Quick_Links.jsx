import React from "react";


function Quick_Links() {
    return (  
    <div className="main__container">
        <div className="charts">   
            <div className="charts__right">
                <div className="charts__right__title">
                    <div>
                        <h1>Quick links</h1>
                        <p>All the good stuff</p>
                    </div>
                        <img src="/images/logo.png" alt="" width="50px" />
                </div>

            <div className="charts__right__cards">
                <div className="card1">
                    <h1>Create Meeting</h1>
                    <br />
                    <i className="fa fa-plus-square text-black"></i>

                </div>

                <div className="card2">
                    <h1>Create Note</h1>
                    <br />
                    <i className="fa fa-plus-square text-black"></i>

                </div>

                <div className="card3">
                    <h1>View new sessions</h1>
                    <br />
                    <i className="fa fa-plus-square text-black"></i>

                </div>

                <div className="card4">
                    <h1>Create new session</h1>
                    <br />
                    <i className="fa fa-plus-square text-black"></i>
                </div>
            </div>
        </div>
     </div>
</div>
)}

export default Quick_Links;