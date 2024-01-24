import { CDN_URL } from "../../utils/constants";


const RestuarantCard = (props) => {
    const {restData}=props;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"  src={CDN_URL
          +
          restData.data.cloudinaryImageId
        }></img>
            <h3>{restData.data.name}</h3>
            <h4>{restData.data.cuisines.join(", ")}</h4>
            <h4>{restData.data.avgRating} stars</h4>
            <h4>Rs {restData.data.costForTwo / 100} FOR TWO</h4>
            <h4>{restData.data.deliveryTime} minutes</h4>



        </div>
    );
};

export default RestuarantCard;