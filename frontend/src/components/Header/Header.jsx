import { NavLink } from "react-router-dom";

import logo from '../../assets/argentBankLogo.webp';
import IconUser from "../../assets/icon-user.webp";

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
                <NavLink to={`/login`} className="main-nav-item">
                    <img src={IconUser}
                        alt="icon-user"
                        className="sign-in-icon" />
                    Sign In{" "}
                </NavLink>
            </div>
        </nav >
    )
}

export default Header;