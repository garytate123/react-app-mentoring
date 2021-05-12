import React from "react";
import Header_Dash from "../Globe_Dashboard/Header_Dash";
import Mentee_SideMenuDash from "./Mentee_SideMenuDash";
import Main_Dash from "../Globe_Dashboard/Main_Dash";
import Welcome_Dash from "../Globe_Dashboard/Welcome_Dash";
import Cards from "../Globe_Dashboard/Cards";

function Mentee_Dash() {
    return (
    <div>
        <Mentee_SideMenuDash />
            <main>
                <Header_Dash />
                <Welcome_Dash />
                <Cards />
                <Main_Dash />
            </main>
    </div>

    )};

export default Mentee_Dash;