import useRestaurantCard from "../utils/hooks/useRestaurantCard";
import Cuisines from "./Cuisines";
import RestaurantCard from "./RestaurantCard";
import OfferedRestaurants from "./offerRestaurants";
import Header from "./Header";
import OfferBanners from "./OfferBanners";
import { Link } from "react-router-dom";
import loader from '../Assets/images/loader.gif'
import ExplorePlaces from "./ExplorePlaces";


const Body = () => {
    const { places, cuisines, allRestaurants, offers } = useRestaurantCard();


    // return !allRestaurants ? <img src={loader}/> : (
    return  (
        <>
            <main   className="font-PTSans  bg-black relative">

                    <>
                        <Header />

                    

                        {/* <section className="mb-12 w-5/6 mx-auto pt-16">
                            <h2 className="text-[25px]  text-white font-bold py-4 mb-4 font-Title">Best offers for you</h2>
                            <div className="flex overflow-x-auto hide_scroll">
                                {offers.map((offer) => {
                                    const urlParams = new URLSearchParams(new URL(offer?.action?.link).search);
                                    const collectionId = urlParams.get("collection_id");
                                    const pathSegments = new URL(offer?.action?.link).pathname.split('/');
                                    const menuId = pathSegments[pathSegments.length - 1];
                                    const linkToUse = collectionId ? `/cuisineCollections/${collectionId}` : `/restaurant/${menuId}`;

                                    return (
                                        <Link
                                            to={linkToUse}
                                            key={offer.id}
                                            className="restaurant_card inline-block mx-2 w-full"
                                        >
                                            <OfferBanners {...offer} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </section> */}

                        {/* Cuisines */}
                        <section className="mb-12 w-5/6 mx-auto">
                            <h2 className="text-[25px]  text-white font-bold py-4 mb-6 font-Title">What's on your Mind Today?</h2>
                            <div className="flex overflow-x-auto hide_scroll">
                                {cuisines?.map((item,index) => {
                                    const urlParams = new URLSearchParams(
                                        new URL(item?.action?.link).search
                                    );
                                    const collectionId = urlParams.get("collection_id");

                                    return (
                                        <Link to={"/cuisineCollections/" + collectionId} key={index} className="mr-5 ">
                                            <Cuisines {...item} />
                                        </Link>
                                    );
                                    
                                })}
                            </div>
                        </section>

                        <hr className="border border-slate-900" />

                        {/* Restaurants with offers */}
                        {/* <OfferedRestaurants isHomePage={true} /> */}
                        <OfferedRestaurants  />

                        <hr className="border border-slate-900" />

                        {/* Explore more restaurants */}
                        <section className="flex-col mt-5 w-5/6 mx-auto">
                            <h2 className="text-[25px] text-white  font-bold py-4 font-Title">Discover Local Flavors: Restaurants</h2>
                            <div className="flex flex-wrap">
                                {allRestaurants?.map((restaurant) => (
                                    <Link
                                        to={"/restaurant/" + restaurant?.info?.id}
                                        key={restaurant?.info?.id}
                                        className="restaurant_card"
                                    >
                                        <RestaurantCard {...restaurant?.info} />
                                    </Link>
                                ))}
                            </div>
                        </section>

                        <hr className="border border-slate-900" />

                        <section className="mt-5 w-5/6 mx-auto">
                            <h2 className="text-[25px] font-bold py-8  text-white font-Title">Best Places to Eat Across Cities</h2>
                            <div className="flex flex-wrap gap-8 pb-16">
                                {places.map((place,index) => (
                                    <ExplorePlaces {...place}  key={index}/>
                                ))}
                            </div>
                        </section>
                    </>
            
            </main>
        </>
    );
};

export default Body;




