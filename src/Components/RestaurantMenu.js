
import { useParams } from "react-router-dom";
import { card_img_cdn } from "../utils/Constants";
import hotel_img from '../Assets/images/hotel.png'
import delievery_boy from '../Assets/images/deliveryman.png';
import time_img from '../Assets/images/time.png';
import location from '../Assets/images/location.svg';
// import Shimmer from './ShimmerUI';
import useRestaurantData from "../utils/hooks/useRestaurantMenu";
import { menu_img } from "../utils/Constants";
import { useRef, useState } from "react";

// import {}

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantMenu, menu, offers } = useRestaurantData(id);
  const sectionRefs = useRef({});
  const [titleVisibility, setTitleVisibility] = useState({});

  const handleScroll = (title) => {
    const sectionRef = sectionRefs.current[title];
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const getFirstThreeDigits = (number) => {
    const absoluteNumber = Math.abs(number); // Ensure it's a positive number
    const numberString = absoluteNumber.toString();
    const firstThreeDigits = numberString.substring(0, 3);
    return firstThreeDigits;
  };



  

  return (!restaurantMenu) ? <Shimmer /> : (
    <div className=" pt-28 bg-[#0F1014] text-white">
      <div className="h-2/4 flex px-80 py-9  shadow-md text-white bg-blue-950 ">
      {/* <div className="h-2/4 flex px-80 py-9 bg-[#495E57] shadow-md text-white before:block before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center before:z-[-1] before:filter before:brightness-50 before:blur-[4px] before:h-full before:w-full before:absolute before:top-0 before:left-0" style={{ backgroundImage: "url(https://c1.wallpaperflare.com/preview/522/1015/616/wooden-background-wooden-oak-texture.jpg)" }}> */}
        <div className="banner-img">
          <img src={card_img_cdn + restaurantMenu.cloudinaryImageId} alt="" className="w-auto  h-60" />
        </div>
        <section className=" ml-32">


          <div className="flex items-center">
            <img src={hotel_img} alt="" className="w-16" /><h1 className=" text-orange-500 font-semibold text-xl">{restaurantMenu.name}</h1>
          </div>

          <div className="flex items-center ml-4">
            <img src={location} alt="" className="w-7" />
            <h2 className="ml-5">{restaurantMenu.areaName}, {restaurantMenu.city}</h2>
          </div>


          <p className="text-[#808080] ml-16">{restaurantMenu?.cuisines?.join(', ')}</p>

          <div className="flex items-center">
            <img src={delievery_boy} alt="" className="w-16 h-12" />
            <h2>{restaurantMenu?.feeDetails?.message}
            </h2>
          </div>

          <div className="flex pt-2">

            <p className="ml-4 bg-green-900 text-white px-1.5 ">
              <span >&#9733;</span>{restaurantMenu.avgRating}
            </p>

            <span className="mx-3">|</span>

            <div className="flex items-center">
              <img src={time_img} alt="" className="w-6" />
              <p>{restaurantMenu?.sla?.deliveryTime}Min</p>
            </div>

            <span className="mx-3">|</span>


            <p>{restaurantMenu.costForTwoMessage}</p>
          </div>
          <button aria-label="On Click" className="ml-3 mt-4 mr-1 hover:bg-orange-50 hover:text-black  hover:scale-105 transition duration-700 px-2 py-1 border  border-orange-500 text-white rounded-md">Add to favorite ❤</button>
          <button aria-label="On Click" className="ml-3 mt-4 hover:bg-orange-50 hover:text-black hover:scale-105 transition duration-700 border ] border-orange-500 px-2 py-1 text-white rounded-md">see reviews</button>


        </section>
      </div>




      <section className="w-5/6 mx-auto  my-11">

        <div className="flex gap-4  ">
          {offers.map((offer) => (
            // <div className="h-16 w-56 ring-slate-800">
            <div className="pointer-events-auto w-[18rem] rounded-lg cursor-pointer p-4 text-md text-center leading-5 shadow-xl shadow-white/5 transition duration-500 hover:bg-orange-50 hover:text-black ring-2 ring-orange-500 ">
              <div className="flex gap-4 items-center ">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart" alt="" />

                <h4 key={offer?.info?.restId}>{offer?.info?.header}</h4>
              </div>
              <div>
                <h4 key={offer?.info?.restId}><span>{offer?.info?.couponCode}</span><span> {offer?.info?.description}</span></h4>

              </div>
            </div>

          ))}
        </div>
      </section>

      <section className="flex items-center w-5/6 mx-auto my-8 shadow-md bg-[#ffe9f3]   gap-8 rounded-full h-14">
        <div class="hidden sm:block sm:w-1/3 relative">
          <form class="flex bg-white ml-6  items-center w-72 px-3 rounded-full text-sm transition focus-within:ring focus-within:border-blue-500"><div class="flex items-center  w-full hover:text-red-500">
              <input
                class="w-full py-2 px-2 rounded-full bg-transparent focus:outline-none font-bold"
                type="search"
                placeholder="Search in menu"
                value=""
              />
              <svg
                stroke="currentColor"
                class=" cursor-pointer ml-2 "
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                id="search"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
      c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
       M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
      z"
                  ></path>
                </g>
              </svg>
            </div>
          </form>
        </div>

        <div className="flex items-center overflow-x-auto hide_scroll gap-4 list-none h-6">
        {menu.map((card, index) => (
          <li
            key={index}
            onClick={() => handleScroll(card.title)}
            className="hover:cursor-pointer hover:bg-white rounded-full text-black transition duration-500 px-4  whitespace-nowrap"
          >
           {`${card.title} (${card.itemCards?.length || 0})`}
          </li>
        ))}
      </div>


      </section>

      <section className="w-5/6 h-[100%] mx-auto flex min-h-screen overflow-y-auto relative">
        <section className="relative ">

        {menu?.map((item, index) => (
        <div key={index} id={`section-${index}`} ref={(ref) => (sectionRefs.current[item.title] = ref)} 
        >
          
          <div onClick={() => setTitleVisibility({ ...titleVisibility, [item.title]: !titleVisibility[item.title] })} className=" flex items-center justify-between cursor-pointer">
          
              {item.title && <h1 className="font-extrabold mt-10 text-lg">{`${item.title} (${item.itemCards?.length || 0})`}</h1>}
              
      
     <svg aria-hidden="true" focusable="false" 
      className={`${titleVisibility[item.title] ? '' : 'rotate-180'} transition duration-500`} width="24" height="24" fill='orange' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 8.44352C18.7966 8.70977 18.8208 9.12643 18.603 9.42006L18.5304 9.50418L12.3286 15.7069C12.1728 15.8628 11.9204 15.8632 11.764 15.708L5.47165 9.46235C5.17767 9.17055 5.1759 8.69568 5.4677 8.4017C5.73298 8.13445 6.14955 8.10869 6.44397 8.32545L6.52835 8.39775L11.7602 13.5894C11.9165 13.7446 12.169 13.7441 12.3248 13.5883L17.4696 8.44361C17.7359 8.17732 18.1525 8.15308 18.4462 8.37091L18.5303 8.44352Z"></path></svg>
       
    
       </div>
    
             

              {!titleVisibility[item.title] && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"> {/* Updated to show 2 cards in one row */}
                {item?.itemCards?.map((card, cardIndex) => (
                  <div className="border border-orange-500 flex items-center p-6 mt-8 hover:bg-pink-50 hover:text-black transition duration-500" key={cardIndex}>
                    <div>
                      <div>
                        <li key={cardIndex} className="list-none">
                          {card?.card?.info?.name}
                        </li>
                        <span>&#x20B9;{getFirstThreeDigits(card?.card?.info?.price)}</span>
                      </div>
                      <span className="text-gray-400">{card?.card?.info?.description}</span>
                    </div>

                    <div>

                      <img src={menu_img + card?.card?.info?.imageId} alt="" className="w-24 ml-auto " />
                      <div className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ">
                        <button class="text-xl text-black font-semibold"> - </button><span class="text-base text-green-700"> 0 </span><button class="text-green-700 text-xl"> + </button>
                        </div>

                    </div>

                  </div>
                ))}
              </div>}
            </div>
          ))}
        </section>

        <section className="sticky top-0 right-0 w-[365px] h-screen  shadow-lg  mt-20 ml-10 bg-slate-500 ">
          <div className="flex flex-col justify-center items-center h-full w-80 ">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" className="h-[200px] w-[200px]" />
            <div className="text-center px-14 pt-8 my-4">
              <h1 className="font-bold text-lg">Hungry ??</h1>
              <h2>You haven't added anything in your cart</h2>
            </div>
            {/* <h2 className="px-14 pt-6 my-2  text-center text-black">Good food is always cooking! Go ahead, order some yummy items from the menu.</h2> */}
          </div>
        </section>



      </section>



    </div>


  )
}

export default RestaurantMenu;