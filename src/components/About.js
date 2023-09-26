import UserClass from "./UserClass"
import UserContext from "../utils/UserContext";


const About = () => {
    return (
        <div className="m-10">
            <h1 className="text-4xl text-green-700">About Us</h1>
            <h2 className="text-2xl text-green-700">Somthing will be here soon.</h2>
            <UserClass />
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({ loggedInUser }) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
        </div>
    )
}

export default About;