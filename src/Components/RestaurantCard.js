import { card_img_cdn } from "../utils/Constants";
import { useState } from "react";


const RestaurantCard = ({ name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla, offer, isOfferPage }) => {

  const [isHeartClicked, setisHeartClicked] = useState(false);

  function handleHeartClick() {
    setisHeartClicked(!isHeartClicked);
  }
// w-64 h-48
  return (

   <div className=" m-5 text-white  w-[275px] h-80 p-2.5 rounded-lg overflow-hidden relative cursor-pointer ">
      <div className="relative w-full h-2/4 rounded-lg overflow-hidden">
        <img src={card_img_cdn + cloudinaryImageId} alt="dish" className=" w-full h-full object-cover hover:scale-110 duration-500" />


        <span style={{ color: isHeartClicked ? '#FF2B85' : "rgb(208, 204, 204)" }} onClick={handleHeartClick} className="absolute right-[5%] top-[5%] text-xl cursor-pointer bg-white rounded-full px-1">❤</span>
       
        {isOfferPage && <p className="absolute bottom-0 rounded-r-xl px-2 font-Balsamiq font-thin text-white text-xl bg-[#FF2B85] bg-orange-600" 
        // style={{
        //   backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.6)50%, rgba(255,255,255,0))',
        // }}
        >
          {offer?.header && offer?.subHeader ? `${offer?.header} ${offer?.subHeader}` : (offer?.header || "No Offer Available")}</p>}
      </div>

      <div className="">      
      <h2 className="text-lg font-semibold">{name}</h2>

      <div className='flex my-2.5'>
        <span className="mr-3"> <span>&#9733;</span>{avgRating}</span>
        <span className="mr-3"> • {sla.deliveryTime}Min</span>
        <span className="mr-3"> • {sla.lastMileTravel}Km</span>
      </div>

      <div className="flex">
      <h5 className='w-[67%] overflow-hidden overflow-ellipsis custom-elipsis'>{cuisines.join(", ")}</h5>

        <h5 className="right-0 text-[#FF2B85] text-orange-500 font-Balsamiq font-semibold" >{costForTwo}</h5>
      </div>
      </div>

      </div>
   
  )
}

export default RestaurantCard;