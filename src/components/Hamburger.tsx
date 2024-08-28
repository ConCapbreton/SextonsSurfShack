
import { useProductCategoryContext } from "../context/ProductCategoryContext"
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  const { categorySelector, toggleHambMenu, showHambMenu, hidden, BOARDS, WETSUITS, ACCESSORIES, CONTACT } = useProductCategoryContext()

  return (
    <div id="hamburger-div" style={showHambMenu ? {marginTop: "123px"} : {}}>
      <button id="hamburger-button" onClick={toggleHambMenu} tabIndex={0} >
        <GiHamburgerMenu id="hamburger-icon" style={showHambMenu ? {color: "var(--hover)"} : {}}/>
      </button>
      <div id="hamburger-menu" style={showHambMenu ? {display: "contents", border: "1px solid white"} : hidden}>
        <button onClick={categorySelector} tabIndex={0} translate="no">{BOARDS}</button>    
        <button onClick={categorySelector} tabIndex={0} translate="no">{WETSUITS}</button>    
        <button onClick={categorySelector} tabIndex={0} translate="no">{ACCESSORIES}</button>    
        <button onClick={categorySelector} tabIndex={0} translate="no">{CONTACT}</button>     
      </div>    
    </div>
  )
}

export default Hamburger
