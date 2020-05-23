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
            <div className="copyright float-right">
                &copy; 2020, Developed with <i className="material-icons">favorite</i> by
                <a href="https://github.com/shaheemMPM" target="_blank" rel="noopener noreferrer" style={{color: '#007D7D', fontWeight: 'bolder'}}> Mohammed Shaheem P</a>
            </div>
            </div>
        </footer>
    );
}
 
export default Footer;