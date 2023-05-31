import { createContext, useState } from "react";
import data from '../../shop-data.json'


const addtocartitem = (cartitem, producttoadd) => {
    
    

    const existingcartitem=cartitem.find((cart)=>cart.id===producttoadd.id)
    
    

    if (existingcartitem) {
        return cartitem.map((cartit) => cartit.id === producttoadd.id ?

            { ...cartit, quantity: cartit.quantity + 1 }
            : cartit
        )
    }

    return [...cartitem, { ...producttoadd, quantity: 1 }];
}




export const CardContext = createContext({
    cardini: false,
    setcardini: () => { },
    cartitem: [],
    addcartitem: () => {

    },
})

export const CardProvider = ({ children }) => {
    const [cardini, setcardini] = useState(false)
    const [cartitem, setcartitem] = useState([])
    console.log(cartitem)

    const addcartitem = (producttoadd) => {

        setcartitem(addtocartitem(cartitem, producttoadd))

    }



    const value = { cardini, setcardini,addcartitem,cartitem};


    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}