import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {

    return ( 
        <div className="sidebar" data-color="azure" data-background-color="white">
            <div className="logo">
                <span className="simple-text logo-normal">
                BISPAGES
                </span>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className={ window.location.pathname === "/" ? "nav-item active" : "nav-item" }>
                        <Link className="nav-link" to="/">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li className={ window.location.pathname === "/customer" ? "nav-item active" : "nav-item" }>
                        <Link className="nav-link" to="/user">
                            <i className="material-icons">supervisor_account</i>
                            <p>Customers</p>
                        </Link>
                    </li>
                    <li className={ window.location.pathname === "/vendor" ? "nav-item active" : "nav-item" }>
                        <Link className="nav-link" to="/ads">
                            <i className="material-icons">photo_library</i>
                            <p>Vendors</p>
                        </Link>
                    </li>
                    <li className={ window.location.pathname === "/works" ? "nav-item active" : "nav-item" }>
                        <Link className="nav-link" to="/commodity">
                            <i className="material-icons">local_grocery_store</i>
                            <p>Works</p>
                        </Link>
                    </li>
                    <li className={ window.location.pathname === "/revenue" ? "nav-item active" : "nav-item" }>
                        <Link className="nav-link" to="/delivery">
                            <i className="material-icons">airport_shuttle</i>
                            <p>Revenue</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>       
    );
}
 
export default Sidebar;