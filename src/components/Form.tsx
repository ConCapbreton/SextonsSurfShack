import { MouseEvent, useEffect, useState } from "react"
import { useProductCategoryContext } from "../context/ProductCategoryContext"

type OptionsType = {
    option: string,
    stock: number,
}

interface FormProps {
    type: string,
    options: OptionsType[],
    tab: number,
}

const Form: React.FC<FormProps> = ({type, options, tab}) => {
    const {extender, imageIndex, productCategory} = useProductCategoryContext() 
    const [optionStock, setOptionStock] = useState<JSX.Element[]>()

    const setIdentifier = (e: MouseEvent) => {
        const element = e.target as HTMLSelectElement
        element.setAttribute("id", "this-select")
        getStock()
    }

    const getStock = () => {
        const selectElement = document.getElementById("this-select") as HTMLSelectElement | null
        const selectedOption = selectElement?.selectedOptions[0].textContent
        const filterOptions = options?.filter((item) => item.option === selectedOption) as OptionsType[]
        let stock = filterOptions[0]?.stock
        let quantityOption = []
            for (let i = 1; i <= stock; i++) {
            quantityOption.push(<option key={i}>{i}</option>)
        }
        selectedOption === "Select an option" ? setOptionStock([<option>-</option>]) : setOptionStock(quantityOption);
    }

    useEffect(() => {
        const removeId = document.getElementById("this-select") as HTMLSelectElement | null
        if (removeId == null) return
        else removeId.setAttribute("id", "")
    }, [imageIndex, productCategory])
    
    const alertMessage = (event: MouseEvent) => {
        event.preventDefault()
        const target = event.target as HTMLButtonElement
        if (target.textContent === "Add to Cart") {
            alert("This site is just for display purposes, there is no shopping cart just yet! See the contacts page for more detail.")
        }
        else {
            alert("This site is just for display purposes, there is no checkout just yet! See the contacts page for more detail.")  
        }
    }

    return (
        <form style={extender ? {display: "none"} : {}}>  
            <label htmlFor={type}>{type}:</label>
            <select onClick={setIdentifier} tabIndex={tab} required>
                <option>Select an option</option>
            {options.map((item) => (
                <option id="option-identifier" key={item.option}>{item.option}</option>
            ))}
            </select>
            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity" tabIndex={tab} required>
                <option>-</option>
                {optionStock?.length === 0 ? <option>Out of stock</option> : optionStock} 
            </select>
            <button tabIndex={tab} onClick={(event) => alertMessage(event)}>Add to Cart</button>
            <button tabIndex={tab} onClick={(event) => alertMessage(event)}>Checkout</button>
        </form>
    )
}

export default Form
