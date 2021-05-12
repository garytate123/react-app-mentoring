import React from "react";
import Header_Dash from "../Globe_Dashboard/Header_Dash";
import Mentor_SideMenuDash from "./Mentor_SideMenuDash";
import Main_Dash from "../Globe_Dashboard/Main_Dash";
import Welcome_Dash from "../Globe_Dashboard/Welcome_Dash";
import Cards from "../Globe_Dashboard/Cards";

function Mentor_Dash() {
    return (
    <div>
        <Mentor_SideMenuDash />
            <main>
                <Header_Dash />
                <Welcome_Dash />
                <Cards />
                <Main_Dash />
            </main>
    </div>

    )};

export default Mentor_Dash;