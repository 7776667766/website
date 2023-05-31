import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { CardContext } from "../Dropdowncontext/Dropdowncontext.component"
import DropCard from "../DropdownCard/DropdownCard.component"
import Dropdowncart2 from "../Dropdowncard2/Dropdowncard2.component";
const Addtocart = () => {
    const { cartitem } = useContext(CardContext)
    console.log(cartitem)
    const navigate=useNavigate()

    const Gotocheckout=()=>{
        navigate('/checkout')
    }
    return (
        <div>
            {cartitem.map((items) => {
                return (
                    <div>
<DropCard key ={items.id} item={items}/>

                    </div>
                )
            })}
   <button onClick={Gotocheckout}>GO TO CHECKOUT</button>
  

        </div>
    )
}
export default Addtocart