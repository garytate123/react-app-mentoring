import React from "react";
import Navbar_Dash from "../Globe_Dashboard/Navbar_Dash";
import Mentee_SideMenuDash from "./Mentee_SideMenuDash";
import Todo_List_Dash from "../Globe_Dashboard/Todo_List_Dash";
import Welcome_Dash from "../Globe_Dashboard/Welcome_Dash";
import Cards from "../Globe_Dashboard/Cards";

function Mentee_Dash() {
    return (
    <div>
        <Mentee_SideMenuDash />
            <main>
                <Navbar_Dash />
                <Welcome_Dash />
                <Cards />
                <Todo_List_Dash />
            </main>
    </div>

    )};

export default Mentee_Dash;