import React from "react";

import { Outlet, Link } from "react-router-dom";

function Layout(){
    return (
        <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/trainer'>Trainer</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet></Outlet>
        </div>
    )
}


export default Layout