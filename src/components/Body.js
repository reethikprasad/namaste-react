import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//import { Link } from "react-router-dom";


const Body = () =>{

  //Local state variable --> super powerful variable
  const [listOfRestaurants,setListofRestaurants] = useState([]);
  //state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async() => {
    const data = await fetch(
      // "https://proxy.cors.sh/
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9414686&lng=77.6178125&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // , {
      //   headers: {
      //   'x-cors-api-key': 'temp_b63fc4e2b79e4b8bb58b6b24e966c6a7'
      //   }
      // }
    );

      const json = await data.json();
      console.log(json);

      setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  
    //Conditional Rendering
    return listOfRestaurants.length===0 ? ( <Shimmer/> 
    ) : (
      <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;