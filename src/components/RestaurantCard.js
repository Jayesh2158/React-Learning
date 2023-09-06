import { CLOUDINARY_BASE_URL } from "../utils/static"


const RestaurantCard = (props) => {
    const { name, cuisines, costForTwo, avgRating, deliveryTime } = props?.cardData
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CLOUDINARY_BASE_URL + props.cardData.cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>₹{costForTwo / 100} For Two</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} min.</h4>
        </div>
    );
};

export default RestaurantCard;