import { useProductCategoryContext } from "../context/ProductCategoryContext"
import { LiaDotCircle, LiaCircle } from "react-icons/lia";
import { useEffect } from "react";

const SelectorButtons = () => {
  const { productArray, imageIndex, setImageIndex, productCategory, TITLE, CONTACT, hidden } = useProductCategoryContext()

  useEffect (() => {
    setImageIndex(0)
  }, [productCategory])

  return (
    <div id="selector-buttons-div" style={productCategory === TITLE || productCategory === CONTACT ? hidden :  {}}>
        {productArray.map((index) => 
            <button className="selector-button" onClick={() => setImageIndex(index.id - 1)} key={index.id} aria-label={'View ' + index.item} tabIndex={2}>{index.id === imageIndex + 1 ? <LiaDotCircle aria-hidden/> : <LiaCircle aria-hidden/>}</button>
        )} 
    </div>
  )
}

export default SelectorButtons
