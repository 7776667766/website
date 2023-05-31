
import { useContext } from "react";
import { CardContext } from "../Dropdowncontext/Dropdowncontext.component";
import Addtocart from "../Addtocart/Addtocart.component"

// import { CardContext } from "../Dropdowncontext/Dropdowncontext.component";
const CardIcon=()=>{
    const {cardini,setcardini}=useContext(CardContext);

    
  
    const toggledropdown=()=>setcardini(!cardini)
   
    return(
        <div>

<div onClick={toggledropdown}>Check cart</div>





        </div>
    )
}
export default CardIcon;