import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../store/Actions/UserAction";

import logo from '../../assets/argentBankLogo.webp';
import IconUser from "../../assets/icon-user.webp";
import IconLogOut from "../../assets/icon-logout.webp";

const Header = () => {
    const selectToken = (state) => state.token.token;
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectUser = (state) => state.user.user.body
    const user = useSelector(selectUser)
    const userName = user?.userName ?? 'Profile';

    const logoutUser = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        navigate('/');
    };

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
                {token ? (
                    <div className="main-nav-link">
                        <NavLink to="/user" className="user-profile">
                            <img src={IconUser}
                                alt="Icon User"
                                className="sign-in-icon" />{" "}
                            {userName}
                        </NavLink>
                        <div onClick={logoutUser} className="logout main-nav-link">
                            <img src={IconLogOut}
                                alt="icon-logout"
                                className="icon-logout" />
                            Sign Out
                        </div>
                    </div>
                ) : (
                    <NavLink to={`/login`} className="main-nav-link">
                        <img src={IconUser}
                            alt="icon-user"
                            className="sign-in-icon" />
                        Sign In{" "}
                    </NavLink>
                )}
            </div>
        </nav>
    );
}

export default Header;