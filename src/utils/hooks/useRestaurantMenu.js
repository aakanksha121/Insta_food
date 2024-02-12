import { useEffect, useState } from "react";
import { Fetch_Menu_Url } from "../Constants";

const useRestaurantData=(resId)=>{
    const [restaurantMenu,setRestaurantMenu]=useState({});
    const [menu,setMenu]=useState([]);
    const [offers, setOffers]=useState([]);
    // const [,setTitle]=useState([]);

    useEffect(()=>{
        getRestaurantMenu();
    },[])

 async function  getRestaurantMenu() {
    const data=await fetch(Fetch_Menu_Url+resId)
    const json=await data.json();
    setRestaurantMenu(json.data.cards[0].card.card.info);
   
    setOffers(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers)

    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(1, -2).map(card => card?.card?.card))


  }
  return {restaurantMenu,menu,offers}; 
}

export default useRestaurantData;