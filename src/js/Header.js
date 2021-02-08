import React from 'react';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <nav className="page-header">
            <h1 className="logo"><Link to="/">Zaplanuj <span>Jedzonko</span></Link></h1>
            <ul className="nav-menu">
                <li><Link to="/app"><span>Zaplanuj posiłki</span></Link></li>
                <li><HashLink smooth to="/#why">Dlaczego warto?</HashLink></li>
                <li><HashLink smooth to="/#about">O mnie</HashLink></li>
                <li><HashLink smooth to="/#contact">Kontakt</HashLink></li>
            </ul>
        </nav>
    )
};

export default Header;
