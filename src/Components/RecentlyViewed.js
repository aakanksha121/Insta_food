import React, { useState } from "react";
import useRestaurantCard from "../utils/hooks/useRestaurantCard";
import RestaurantCard from "./RestaurantCard";
import ExplorePlaces from "./ExplorePlaces";

const RecentlyViewed = ({ recentlyViewed }) => {
  return (
    <section className="mt-5 w-5/6 mx-auto">
      <h2 className="text-[25px] font-bold py-4 font-Title">
        Recently Viewed Restaurants
      </h2>
      <div className="flex flex-wrap">
        {recentlyViewed.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
            className="restaurant_card"
          >
            <RestaurantCard {...restaurant?.info} />
          </Link>
        ))}
      </div>
    </section>
  );
};


export default RecentlyViewed;
