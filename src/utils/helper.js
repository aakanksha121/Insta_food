
import { useState } from "react";
function Helper() {
    const [activeTab, setActiveTab] = useState(true);

const handleTabClick = () => {
   addEventListener('onClick',()=>{
    setActiveTab=false;
   })
};
  
return{handleTabClick,activeTab};
}

export default Helper;
