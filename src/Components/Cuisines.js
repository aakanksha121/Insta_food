
import { card_img_cdn } from "../utils/Constants";


const Cuisines = ({ imageId }) => {



  return (

   <>  
   <div className="w-[150px] "> 
    <img src={card_img_cdn + imageId} alt="" className="  cursor-pointer hover:scale-105 transition duration-500 rounded-full w-48 h-36" />
    </div>
  
</>

  )
}
export default Cuisines;

