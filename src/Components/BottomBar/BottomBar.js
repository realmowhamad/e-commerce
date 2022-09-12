import React from "react";
import { NavLink } from "react-router-dom";
import './BottomBar.css'
import { BsList } from "react-icons/bs"
import { RiHomeLine } from "react-icons/ri"
import { CgShoppingBag } from "react-icons/cg"
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai"

export default function BottomBar() {
    return (
        <div className="bottomBar-icons">
            <NavLink to="/" className="Home">{<RiHomeLine />}</NavLink>
            <NavLink to="/" className="Home">{<AiOutlineHeart />}</NavLink>
            <NavLink to="/" className="list">{<BsList />}</NavLink>
            <NavLink to="/" className="Home">{<CgShoppingBag />}</NavLink>
            <NavLink to="/" className="Home">{<AiOutlineUser />}</NavLink>
        </div>


    )
}
