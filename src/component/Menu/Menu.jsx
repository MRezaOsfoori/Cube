import React, { useEffect, useState } from "react";

import Owner from "./Owner/Owner";
import Search from "./Search/Search"
import DealType from "./DealType/DealType"
import UserType from "./UserType/UserType"
import Maskooni from "./UserRoutes/Maskooni"
import Edari from "./UserRoutes/Edari"
import MogheiatEdari from "./UserRoutes/MogheiatEdari"
import Tejari from "./UserRoutes/Tejari"
import Sanati from "./UserRoutes/Sanati"
import ExchangePage from "./Exchange/ExchangePage"
import Neighborhood from "./Neighborhood/Neighborhood"
import { SideMenuSVG } from "../../dummy";


const Menu = ({ compo,dh,setdh,nmalek,setnmalek }) => {
 
  const [menuButton, setMenuButton] = useState(false)
  
  const menuButtonHandler = () => {
    
     setMenuButton(!menuButton)
  }

  const move = (e) => {
   
     setdh(window.innerHeight - e.touches[0].clientY);
  };

  
  return (
    <>
    <div className="relative min-h-[314px] max-h-[90vh] bg-white" style={{ height: `${dh}px` }} >
     <div
            className=" z-[90]  flex items-center justify-center h-[36px]    absolute top-0 bg-gray5  left-3 right-3"
            
            ontouch={menuButtonHandler}
            onTouchMove={(e) => {
              move(e);
            }}
            
          >
            {SideMenuSVG}
          </div>
      
    <div className=" h-full   ">
    {compo === "Owner" ? <Owner menuButton={menuButton} menuHandler={menuButtonHandler} dh={dh} setdh={setdh} nmalek={nmalek} setnmalek={setnmalek} />
        : null}
      {compo === "DealType" ? <DealType menuButton={menuButton} menuHandler={menuButtonHandler} />
        : null}
        {compo === "UserType" ? <UserType menuButton={menuButton} menuHandler={menuButtonHandler} />
        : null}
    </div>
     
    </div>
    



    </>
  );
};

export default Menu;
