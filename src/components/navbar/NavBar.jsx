import CartWidget from "./CartWidget" 
import { FaTabletScreenButton } from "react-icons/fa6"
import "./navbar.scss"
import { NavLink, Link, useNavigate} from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav className="navbar">

            <ul className="categories">
                <NavLink to="/category/celulares" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Celulares</NavLink>
                <NavLink to="/category/tablets" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Tablets</NavLink>
                <NavLink to="/category/notebooks" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Notebooks</NavLink>
            </ul>

            <Link to="/" className="brand">
                <FaTabletScreenButton className="icon-brand" />
                <p className="title-brand">Technology</p>
            </Link>
            <CartWidget/>
        
        </nav>
    )
}

export default NavBar