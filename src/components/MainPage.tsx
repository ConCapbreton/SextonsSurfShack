
import ProductDisplay from "./ProductDisplay"
import Contact from "./Contact"
import SelectorButtons from "./SelectorButtons"
import { useProductCategoryContext } from "../context/ProductCategoryContext"

const MainPage = () => {
  const { productCategory, hidden, setShowHambMenu, TITLE, BOARDS, WETSUITS, ACCESSORIES } = useProductCategoryContext()

  return (
    <div id="image-div" onClick={() => {setShowHambMenu(false)}}>
      <img id="backgroundpic" src="/backgroundpic.png" alt="Surfer inside barrel from www.leroybellet.com"/>
      <div id="main-page-text" style={productCategory === TITLE ? {} : hidden}>
        <h1>Welcome to Sexton's Surf Shack!</h1>
        <h2>A hand picked selection of the best surf hardware on the market.</h2>
        <h2>Select a category from the menu above to browse our store.</h2>
        <h2>Happy shopping!</h2>
      </div>
      <div id="main-page-titles" style={productCategory !== TITLE ? {} : hidden}>
        <h1>{productCategory}</h1>
      </div>
      <Contact />
      <ProductDisplay identifier={BOARDS} />
      <ProductDisplay identifier={WETSUITS} />
      <ProductDisplay identifier={ACCESSORIES} />
      <SelectorButtons />
    </div>
  )
}

export default MainPage
