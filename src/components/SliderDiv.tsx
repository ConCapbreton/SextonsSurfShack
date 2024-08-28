import { useProductCategoryContext } from "../context/ProductCategoryContext"
import Form from "./Form"
import { CSSProperties } from "react"

const SliderDiv = () => {
    const {imageIndex, extender, hidden, toggleExtender, productArray} = useProductCategoryContext()

    const fullDescriptionCSS: CSSProperties = {
        height: "fit-content",
        paddingLeft: "0",
        marginLeft: "0", 
      }

   return (
    <div id="slider-div" >{productArray?.map((item) => (
        <div id="image-specs-div" key={item.id}  aria-hidden={imageIndex + 1 !== item.id} style={{translate: `${-100 * imageIndex}%`}}>
            <img className="product-image" key={item.id} src={item.picturePath} alt={item.alt}/>
            <div className="product-details">
                <p id="name-p"><strong>Name: </strong>{item.item}</p>
                <button id="product-descrption-button" onClick={toggleExtender} style={extender ? fullDescriptionCSS : {}} tabIndex={imageIndex + 1 == item.id ? 3 : -1}>
                    <div className="product-description-div" style={extender ? {display: "contents"} : hidden}>
                        <p><strong>Description: </strong></p>
                        <p>{item.desc}</p>
                        <p id="description-extender-p">Click to return.</p>
                    </div>
                    <div className="product-description-div" style={extender ? hidden : {display: "contents"}}>
                        <p>
                            <strong>Description: </strong>
                            {item.desc.length > 34 ? item.desc.substring(0, 15) : item.desc}
                            <span id="description-extender-span">{item.desc.length > 34 ? "...click for more." : ""}</span>
                        </p>
                    </div>
                </button> 
                <p id="price-p" style={extender ? hidden : {}}><strong>Price: </strong>{Intl.NumberFormat('en-EU', {style: "currency", currency: "EUR"}).format(item.price)}</p>
                <Form type={item.optionType} options={item.options} tab={imageIndex + 1 == item.id ? 3 : -1}/>
            </div>
        </div>
    ))}
    </div>                                                                                            
    )
}

export default SliderDiv
