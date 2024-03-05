import { NavLink } from "react-router-dom";
import logo from '../../assets/argentBankLogo.webp';

function Header() {
    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to={`/`}>
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
            </NavLink>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav >
    )
}

export default Header;