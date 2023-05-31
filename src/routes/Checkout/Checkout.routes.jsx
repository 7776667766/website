import { useContext } from "react";
import { CardContext } from "../../component/Dropdowncontext/Dropdowncontext.component";

const CheckoutRoutes=()=>{
const {cartitem,addcartitem}=useContext(CardContext);

    
    return(
        <div>
            {cartitem.map((cart)=>{
                
                return(<div>
                    {cart.quantity}  
                    {cart.name}               
               <span onClick={()=>addcartitem(cartitem)}>increment</span>
               <br/>
                <span>decrement</span>
                    </div>)
            })}

        </div>
    )
}
export default CheckoutRoutes