import React from 'react';

const Footer = () => {
    return (  
        <footer className="footer">
            <div className="container-fluid">
            <nav className="float-left">
                <ul>
                    <li>
                        <a href={window.location.pathname}>
                        BISPAGES.COM
                        </a>
                    </li>
                    <li>
                        <a href={window.location.pathname}>
                        About Us
                        </a>
                    </li>
                    <li>
                        <a href={window.location.pathname}>
                        Notifications
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        </footer>
    );
}
 
export default Footer;