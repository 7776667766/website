import { useContext } from "react";
import { CardContext } from "../Dropdowncontext/Dropdowncontext.component";
const ProductCard = ({ product }) => {
    const { name, price, imgUrl } = product;
    const { addcartitem } = useContext(CardContext)
    const additemtocart = () => addcartitem(product)
   
    return (
        <div>
            <img >{imgUrl}</img>
            <span className="product-name"> {name}   </span>
            <span className="product-price"> {price}   </span>
            <button onClick={additemtocart}> Add Cart</button>
        </div>
    )
}
export default ProductCard