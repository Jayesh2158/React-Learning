import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const dummy = "Dummy Data";

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

        var categories =
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (c) =>
                    c.card?.["card"]?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
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
        <div className="menu m-10 text-center">
            <h1 className="text-5xl text-green-700">{name}</h1>
            <p className="text-3xl text-green-700">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;