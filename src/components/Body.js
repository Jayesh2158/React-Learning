import RestaurantCard, { withPromatedRestaurantCard } from "./RestaurantCard";
import cardList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    const WithPromatedRestaurantCard = withPromatedRestaurantCard(RestaurantCard)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971598&lng=77.594562&sortBy=RELEVANCE&collection=83647&offset=30&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING"
        );

        const jsonData = await res.json();

        if (true) {
            setrestaurantList(cardList);
            setfilteredList(cardList);
        } else {
            setrestaurantList(jsonData?.data?.cards);
            setfilteredList(jsonData?.data?.cards);
        }
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection;
            </h1>
        );

    if (restaurantList.length < 1) {
        return <Shimmer />;
    }

    const { loggedInUser, setUserName } = useContext(UserContext);

    return (
        <div className="body">
            <div className="flex items-center  pl-4">
                <div className="search-container">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchItem}
                        onChange={(e) => {
                            setSearchItem(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-300 m-4 rounded-lg"
                        onClick={() => {
                            const searchData = restaurantList.filter((res) =>
                                res.data.data.name
                                    .toLowerCase()
                                    .includes(searchItem.toLowerCase())
                            );
                            setfilteredList(searchData);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input
                        className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <dev className="search flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const topRatesRes = restaurantList.filter(
                                (res) => res.data.data.avgRating > 4.1
                            );
                            setfilteredList(topRatesRes);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </dev>
            </div>
            <div className="flex flex-wrap">
                {filteredList.map((restaurant) => (
                    <Link
                        key={restaurant.data.data.id}
                        to={"/restaurants/" + restaurant.data.data.id}
                    >
                        {restaurant.data.data.promoted ? <WithPromatedRestaurantCard cardData={restaurant.data.data} /> : <RestaurantCard cardData={restaurant.data.data} />}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;