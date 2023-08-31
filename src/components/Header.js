import { HEADER_LOGO_URL } from "../utils/static"
import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/" onClick={() => {
                    Verloop(function () { this.closeWidget(); });
                }}>
                    <img className="logo" src={HEADER_LOGO_URL} />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginBtn === "Login"
                            ? setLoginBtn("Logout")
                            : setLoginBtn("Login");

                        var val = Math.floor(1000 + Math.random() * 9000);
                        Verloop(function () {
                            this.setUserId(val.toString())
                            this.logout();
                        });
                    }}>
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;