import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useProductCategoryContext } from "../context/ProductCategoryContext"

const Contact = () => {
    const { productCategory, hidden, CONTACT } = useProductCategoryContext()

    return (
        <div id="contact-page" style={productCategory === CONTACT ? {} : hidden} >
            <h2>This site is for display purposes only.</h2>
            <p>If you would like to purchase any of the products you can visit these links:</p>
            <ul>
                <li><a className="contact-links" href="https://www.euroglass90.com/" target="_blank" tabIndex={2}>Boards and Accessories</a></li>
                <li><a className="contact-links" href="https://surfwear.sooruz.com/" target="_blank" tabIndex={2}>Wetsuits</a></li>
            </ul>
            <p>If you want to access the code for the site you can see it here:</p>
            <a  href="https://github.com/ConCapbreton/SEXTONSSURFSHACK" target="_blank" tabIndex={2}>
                <FaGithub id="contact-github" className="contact-icons" />
            </a>
            <p>Or contact me directly if you want to talk code or job opportunities.</p>
            <div id="contact-icon-container">
                <a href="mailto:connorsexton@hotmail.com" target="_blank" tabIndex={2}> 
                    <MdOutlineEmail className="contact-icons"/>
                </a>
                <a href="https://www.linkedin.com/in/connor-sexton-37024a26/" target="_blank" tabIndex={2}> 
                    <IoLogoLinkedin className="contact-icons" /> 
                </a>
            </div>
            </div>
    )
}

export default Contact
