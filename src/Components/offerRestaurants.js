import RestaurantCard from "./RestaurantCard";
import useRestaurantCard from "../utils/hooks/useRestaurantCard";
import { Link } from "react-router-dom";

 function OfferedRestaurants({isHomePage}) {
    const {offerResstaurants}=useRestaurantCard();
  return (
    <>
       <section className="flex-col  mt-5  w-5/6 mx-auto">
                    <h2 className="text-[25px] text-white font-bold py-4 font-Title">Restaurants with great offers</h2>
                   
                  
                    <div className={`flex-wrap flex hide_scroll  ${isHomePage ? ' overflow-x-auto' : ''}`} >
                   
                        <div className={`h-full flex ${!isHomePage? 'flex-wrap':''}`}>
                        
                            {offerResstaurants.map((restaurant) => (
                      <Link
                      to={"/restaurant/" + restaurant?.info?.id}
                      key={restaurant?.info?.id}
                      className="restaurant_card"
                  >
                                <RestaurantCard
                                    key={restaurant.info.id}
                                    name={restaurant.info.name}
                                    cloudinaryImageId={restaurant.info.cloudinaryImageId}
                                    avgRating={restaurant.info.avgRating}
                                    cuisines={restaurant.info.cuisines}
                                    costForTwo={restaurant.info.costForTwo}
                                    sla={restaurant.info.sla}
                                    offer={restaurant?.info?.aggregatedDiscountInfoV3}
                                    isOfferPage={true}
                                />
</Link>
                            ))}
                         
                        </div>
                    </div>
                </section>
    </>
  )
}

export default OfferedRestaurants;
