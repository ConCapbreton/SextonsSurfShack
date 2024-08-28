import { GiWaveSurfer } from "react-icons/gi";
import { SlBasket } from "react-icons/sl";
import Hamburger from "./Hamburger";
import { useProductCategoryContext } from "../context/ProductCategoryContext";

const Header = () => {
    const { categorySelector, setProductCategory, setShowHambMenu, BOARDS, WETSUITS, ACCESSORIES, CONTACT } = useProductCategoryContext()
    
    const titlePage = () => { 
        setProductCategory("Title")
        setShowHambMenu(false)
    }
    
    return (
        <div id="header-div" >
            <button id="header-logo-button" onClick={titlePage}>
                <GiWaveSurfer id="header-logo-icon" className="title-elements"/>
                <p id="header-name" className="title-elements">Sexton's Surf Shack</p>
            </button>
            <div id="header-menu" >
                <Hamburger />
                <nav id="nav-list">
                    <button onClick={categorySelector} translate="no">{BOARDS}</button>    
                    <button onClick={categorySelector} translate="no">{WETSUITS}</button>    
                    <button onClick={categorySelector} translate="no">{ACCESSORIES}</button>    
                    <button onClick={categorySelector} translate="no">{CONTACT}</button>    
                </nav>
                <button id="cart-icon-button" onClick={() => {alert("This site is just for display purposes, there is no shopping cart just yet! See the contacts page for more detail.")}}>
                    <SlBasket id="cart-icon"/>
                </button>
            </div>
        </div>
    )
}

export default Header
