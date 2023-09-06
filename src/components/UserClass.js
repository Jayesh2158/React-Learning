import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Null",
                location: "Null",
                avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU",
                bio: "Null"
            }
        };
    }

    async componentDidMount() {
        const res = await fetch("https://api.github.com/users/jayesh2158")
        const data = await res.json();
        this.setState({ userInfo: data });
    }

    render() {
        const { name, location, avatar_url, bio } = this.state.userInfo;
        return (
            <div className="user-card py-10">
                <img className="w-[150px]" src={avatar_url} />
                <h3 className="text-xl">Name: {name}</h3>
                <h4>Location: {location}</h4>
                <h5>Bio: {bio}</h5>
            </div>
        )
    }
}

export default UserClass;
