import { HEADER_LOGO_URL } from "../utils/static"
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between shadow-lg lg:bg-green-50">
            <div className="logo-container">
                <Link to="/" onClick={() => {
                    Verloop(function () { this.closeWidget(); });
                }}>
                    <img className="w-[120px] mix-blend-multiply" src={HEADER_LOGO_URL} />
                </Link>
            </div>
            <div className="item-center">
                <ul className="flex text-2xl p-4 m-4 item-center ">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button className="bg-green-300 rounded-lg px-3" onClick={() => {
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
                    <li className="px-4 ">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;