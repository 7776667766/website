
import { Outlet, Link } from "react-router-dom";
import { useContext, Fragment, useState } from "react";

import CardIcon from "../card-icon/card-icon.component";
import DropdownCard from "../DropdownCard/DropdownCard.component";
import { CardContext } from "../Dropdowncontext/Dropdowncontext.component";
import DropCard from "../DropdownCard/DropdownCard.component";
import Addtocart from "../Addtocart/Addtocart.component";

const Navbar = () => {


    const { cardini } = useContext(CardContext)
    console.log(cardini)


    return (

        <div>
            <div>
                <Link to="/">LOGO</Link>
            </div>

            <div>
                <Link to='/product'>product</Link>
            </div>
            <div>
                <Link to='/sign-in'>Sign-In</Link>
            </div>
            <div>

            </div>

            <CardIcon />
            {cardini && < Addtocart />}
            <Outlet />


        </div>


    )
}
export default Navbar;