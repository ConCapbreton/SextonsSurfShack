import { createContext, useContext, ReactElement, useState, CSSProperties } from 'react'
import { boardsArray } from "../Products/Boards"
import { accessoriesArray } from "../Products/Accessories"
import { wetsuitsArray } from '../Products/Wetsuits'

type OptionsType = {
  option: string,
  stock: number,
}

interface ProductObject {
  id: number,
  item: string,
  price: number,
  picturePath: string,
  alt: string,
  desc: string,
  optionType: string,
  options: OptionsType[]
}

type ContextProps = {
  BOARDS: string,
  WETSUITS: string,
  ACCESSORIES: string,
  CONTACT: string,
  TITLE: string,

  productCategory: string,
  setProductCategory: React.Dispatch<React.SetStateAction<string>>
  showHambMenu: boolean,
  setShowHambMenu: React.Dispatch<React.SetStateAction<boolean>>
  toggleHambMenu: any,
  categorySelector: any,
  hidden: CSSProperties

  imageIndex: number, 
  setImageIndex: React.Dispatch<React.SetStateAction<number>>,
  productCSS: CSSProperties,
  productArray: ProductObject[] | [],
  nextImage: any,
  prevImage: any,

  extender: boolean,
  setExtender: React.Dispatch<React.SetStateAction<boolean>>,
  toggleExtender: any,
}

const InitialValues: ContextProps = {
  BOARDS: "Boards",
  WETSUITS: "Wetsuits",
  ACCESSORIES: "Accessories",
  CONTACT: "Contact",
  TITLE: "Title",

  productCategory: "Title",
  setProductCategory: () => {},
  showHambMenu: false,
  setShowHambMenu: () => {},
  toggleHambMenu: () => {},
  categorySelector: () => {},
  hidden: {},

  imageIndex: 0, 
  setImageIndex: () => {},
  productCSS: {},
  productArray: [],
  nextImage: () => {},
  prevImage: () => {},

  extender: false,
  setExtender: () => {},
  toggleExtender: () => {},
}

const ProductCategoryContext = createContext(InitialValues)
type ChildrenType = {children?: ReactElement | ReactElement[]}

const ProductCategoryProvider = ({children}: ChildrenType) => {
  
  /*CATEGORY TITLES*/  

  const BOARDS: string = "Boards"
  const WETSUITS: string = "Wetsuits"
  const ACCESSORIES: string = "Accessories"
  const CONTACT: string = "Contact"
  const TITLE: string = "Title"

  /*MENU CONTROLS*/

  const [productCategory, setProductCategory] = useState<string>("Title")
  const [showHambMenu, setShowHambMenu] = useState<boolean>(false)

  const toggleHambMenu = (): void => {
    setShowHambMenu(prevState => !prevState)
  }

  const categorySelector = (event: Event) => {
    let target = event.target as HTMLButtonElement
    setProductCategory( prevState => target.textContent == null ? prevState : target.textContent) 
    setShowHambMenu(false)
  } 

  const query: MediaQueryList = matchMedia('(max-width: 1024px)')
  query.addEventListener('change', () => {window.innerWidth < 1024 ? {} : setShowHambMenu(false);})

  const hidden: React.CSSProperties = {display: "none",}

  /*PRODUCT DISPLAY*/

  const [imageIndex, setImageIndex] = useState<number>(0)

  const productCSS: CSSProperties = {display: "flex",}

  let productArray: ProductObject[] | [] = []  
  if (productCategory === BOARDS) {productArray = boardsArray}   
  else if (productCategory === WETSUITS) {productArray = wetsuitsArray}    
  else if (productCategory === ACCESSORIES) {productArray = accessoriesArray}
  
  const nextImage = () => {
    setImageIndex(index => {
      if (index === productArray.length - 1) return 0
      return index + 1
    })
  }
  const prevImage = () => {
    setImageIndex(index => {
      if (index === 0) return productArray.length -1
      return index - 1
    })
  }

  const [extender, setExtender] = useState<boolean>(false)
  const toggleExtender = () => {setExtender(prevState => !prevState)}

  return (
    <ProductCategoryContext.Provider value={{BOARDS, WETSUITS, ACCESSORIES, CONTACT, TITLE, productCategory, setProductCategory,  showHambMenu, setShowHambMenu, toggleHambMenu, categorySelector, hidden, imageIndex, setImageIndex, productCSS, productArray, nextImage, prevImage, extender, setExtender, toggleExtender}}>
      {children}
    </ProductCategoryContext.Provider>
  )
}

export default ProductCategoryProvider

export const useProductCategoryContext = () => useContext(ProductCategoryContext)