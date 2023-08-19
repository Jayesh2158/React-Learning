import RestaurantCard from "./RestaurantCard";
import cardList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971598&lng=77.594562&sortBy=RELEVANCE&collection=83647&offset=30&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING"
        );

        const jsonData = await res.json();

        console.log(jsonData?.data?.cards);

        if (jsonData?.data?.cards.length === 0) {
            setrestaurantList(cardList);
            setfilteredList(cardList);
        } else {
            setrestaurantList(jsonData?.data?.cards);
            setfilteredList(jsonData?.data?.cards);
        }
    };

    if (restaurantList.length < 1) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-box"
                        value={searchItem}
                        onChange={(e) => {
                            setSearchItem(e.target.value);
                        }}
                    />
                    <button
                        className="search-btn"
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
                <button
                    className="filter-btn"
                    onClick={() => {
                        const topRatesRes = restaurantList.filter(
                            (res) => res.data.data.avgRating > 4.1
                        );
                        setfilteredList(topRatesRes);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredList.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.data.data.id}
                        cardData={restaurant.data.data}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;