import { HEADER_LOGO_URL } from "../utils/static"
import { useState } from "react";


const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={HEADER_LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginBtn === "Login"
                            ? setLoginBtn("Logout")
                            : setLoginBtn("Login");
                    }}>
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;