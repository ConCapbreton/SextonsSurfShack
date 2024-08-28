import { FaCircleArrowLeft,  FaCircleArrowRight } from "react-icons/fa6";
import { useProductCategoryContext } from "../context/ProductCategoryContext";
import SliderDiv from "./SliderDiv";

interface ProductDisplayProps {
    identifier: string,
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({identifier}) => {
    const {productCategory, hidden, productCSS, nextImage, prevImage} = useProductCategoryContext()
    
    return (
            <div id="products-div" style={productCategory === identifier ? productCSS : hidden}>
                <button className="product-btn prev-img-btn" onClick={prevImage} aria-label="View Previous Product" tabIndex={4}>
                    <FaCircleArrowLeft aria-hidden/>
                </button>
                <SliderDiv />                            
                <button className="product-btn next-img-btn" onClick={nextImage} aria-label="View Next Product" tabIndex={4}>
                    <FaCircleArrowRight aria-hidden/>
                </button>
            </div>  
    )
}

export default ProductDisplay
