import React from 'react';
import { offer_Banners_cdn } from '../utils/Constants';


    

function OfferBanners({ imageId }) {
  return (
    <div className="w-[425px]">
      <img
        src={`${offer_Banners_cdn}${imageId}`}
        alt={`Offer Banner`}
        className="w-[435px] h-64 m-2"
      />
    </div>
  );
}





export default OfferBanners;
