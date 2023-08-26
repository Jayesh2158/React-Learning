import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/static";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    try {
        var { name, cuisines, costForTwoMessage } =
            resInfo?.cards[0]?.card?.card?.info;

        var { itemCards } =
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

        if (!itemCards) {
            const itemCardsNew =
                resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[1]?.itemCards;
            itemCards = itemCardsNew
        }
    } catch {
        const itemCardsConst = [{
            "card": {
                "info": {
                    "id": "1234",
                    "name": "Not Found",
                    "price": 40400
                }
            }
        }]
        itemCards = itemCardsConst
    }

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {item.card.info.price === 40400 ? "" : " Rs. "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;