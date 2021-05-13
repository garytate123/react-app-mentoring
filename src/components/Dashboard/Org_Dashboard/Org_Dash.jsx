import React from "react";
import Navbar_Dash from "../Globe_Dashboard/Navbar_Dash";
import Org_SideMenuDash from "./Org_SideMenuDash";
import Todo_List_Dash from "../Globe_Dashboard/Todo_List_Dash";
import Welcome_Dash from "../Globe_Dashboard/Welcome_Dash";
import Cards from "../Globe_Dashboard/Cards";
// import Quick_Links_Dash from '../Globe_Dashboard/Quick_Links_Dash';
import '../dashboard-styles.css';


function Org_Dash() {
    return (
    <div>
        <Org_SideMenuDash />
            <main class="main-dash">
                <Navbar_Dash />
                <Welcome_Dash />
                <Cards />
                <Todo_List_Dash/>
            </main>
    </div>
    )};

export default Org_Dash;