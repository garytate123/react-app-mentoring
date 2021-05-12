import React from "react";
import Header_Dash from "./Dashboard/Globe_Dashboard/Header_Dash";
import Org_SideMenuDash from "./Dashboard/Org_Dashboard/Org_SideMenuDash";
import Main_Dash from "./Dashboard/Globe_Dashboard/Main_Dash";
import Welcome_Dash from "./Dashboard/Globe_Dashboard/Welcome_Dash";
import Cards from "./Dashboard/Globe_Dashboard/Cards";

function Dashboard() {
    return (
    <div>
        <Org_SideMenuDash />
        <Header_Dash />
        <Welcome_Dash />
        <Cards />
        <Main_Dash />
    </div>
    )};

export default Dashboard;