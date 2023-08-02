import { CLOUDINARY_BASE_URL } from "../utils/static"


const RestaurantCard = (props) => {
    const { name, cuisines, costForTwo, avgRating, deliveryTime } = props?.cardData
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CLOUDINARY_BASE_URL + props.cardData.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>₹{costForTwo / 100} For Two</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} min.</h4>
        </div>
    );
};

export default RestaurantCard;