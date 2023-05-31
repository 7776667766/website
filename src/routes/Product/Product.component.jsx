import { useContext } from "react";
import { ProductsContext } from "../../Productcontext/Product.context";
import ProductCard from "../../component/product-card/productCard.component";
const Product = () => {
    const {products} =useContext(ProductsContext)
    return (
        <div>
            {products.map((shop_list) => {
                return (
                <div>
                
<ProductCard product={shop_list}/>
                    </div>
                    )
            })}
        </div>
    )
}
export default Product;