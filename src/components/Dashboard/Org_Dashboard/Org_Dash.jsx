import React from "react";
import Header_Dash from "../Globe_Dashboard/Header_Dash";
import Org_SideMenuDash from "./Org_SideMenuDash";
import Main_Dash from "../Globe_Dashboard/Main_Dash";
import Welcome_Dash from "../Globe_Dashboard/Welcome_Dash";
import Cards from "../Globe_Dashboard/Cards";

function Org_Dash() {
    return (
    <div>
        <Org_SideMenuDash />
            <main>
                <Header_Dash />
                <Welcome_Dash />
                <Cards />
                <Main_Dash />
            </main>
    </div>
    )};

export default Org_Dash;