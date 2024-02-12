import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Shimmer from './ShimmerUI';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';
// import { fetch_Dishes } from '../constants';


function ExploreCuisines() {
    const { id } = useParams();
    const [resDishTitle, setResDishTitle] = useState({});
    const [restaurantDishes, setRestaurantDishes] = useState([]);
  
    useEffect(() => {
      getRestaurantDishes();
    }, []);
  
    async function getRestaurantDishes() {
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=${id}&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      const json = await data.json();
      setResDishTitle(json?.data?.cards[0]?.card?.card);
      setRestaurantDishes(json?.data?.cards.slice(3).map(card => card?.card?.card?.info).filter(Boolean));
  
    }
  
   
  return (

      
    <section className='bg-[#0F1014] text-white'>
      <div className="pb-12 w-5/6 mx-auto pt-24  ">
        <div className="mt-5 ml-8 ">
          <h1 className='text-5xl font-menu_Title '>{resDishTitle.title}</h1>
          <i className='text-md '>{resDishTitle.description}</i>

          <h3 className='mt-5 font-semibold  text-2xl font-Title'>Restaurants to explore</h3>
        </div>

        <div className="flex flex-wrap">

          {restaurantDishes.map((restaurant) => (
             <Link to={"/restaurant/" + restaurant?.id} key={restaurant?.id} className="restaurant_card">
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                cloudinaryImageId={restaurant.cloudinaryImageId}
                avgRating={restaurant.avgRating}
                cuisines={restaurant.cuisines}
                costForTwo={restaurant.costForTwo}
                sla={restaurant.sla}
              />
             </Link>
          ))}
        </div>
      </div>


    </section>

  );

}

export default ExploreCuisines;
