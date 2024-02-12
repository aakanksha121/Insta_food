import {fetch_Restaurant_List,offer_restaurants} from '../Constants';
import { useState,useEffect } from 'react';

function useRestaurantCard() {
  const [offers, setOffers] = useState([]);
  const [cuisines,setCuisines]=useState([]);
  const [offerResstaurants, setofferResstaurants] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);
  const [places,setPlaces]=useState([])
  const [searchText, setSearchText] = useState({});


  useEffect(() => {
    getOffers()
  }, []);

async function getOffers() {
  try {
    const data = await fetch(fetch_Restaurant_List);
    if (!data.ok) {
      throw new Error(`HTTP error! Status: ${data.status}`);
    }
    const json = await data.json();
  
    setOffers(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setCuisines(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setallRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setPlaces(json?.data?.cards[7]?.card?.card?.brands)
  } catch (error) {
    console.error("Error fetching offers:", error);
  }
}


  useEffect(() => {
    getOfferRestaurants();
  }, []);

  
  async function getOfferRestaurants() {
    const data = await fetch(offer_restaurants);

    const json = await data.json();

    setofferResstaurants(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  

  return {offers, cuisines, offerResstaurants ,allRestaurants,searchText,places,setSearchText};
}

export default useRestaurantCard;
