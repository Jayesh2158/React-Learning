import RestaurantCard from "./RestaurantCard";
import cardList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [restaurantList, setrestaurantList] = useState(cardList);
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRes = restaurantList.filter(
                            (res) => res.data.data.avgRating > 4.1
                        );
                        setrestaurantList(filteredRes)
                    }}>
                    Set restaurants rating over 4.1
                </button>
            </div>
            <div className="res-container">
                {
                    restaurantList.map((restaurant) => <RestaurantCard key={restaurant.data.data.id} cardData={restaurant.data.data} />)
                }
            </div>
        </div>
    );
};

export default Body;