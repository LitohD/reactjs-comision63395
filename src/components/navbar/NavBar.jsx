import CartWidget from "./CartWidget" 
import "./navbar.scss"

const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="brand">
        <img src="https://img.freepik.com/vector-premium/logotipo-monitor-tienda-digital-logotipo-productos-electronicos-o-logotipo-tienda-logotipo-tienda_372882-57.jpg?semt=ais_hybrid" alt="" />
        <p>Technology</p>
            </div>

            <ul className="categories">
                <li className="category">Celulares</li>
                <li className="category">Tablets</li>
                <li className="category">Notebook</li>
            </ul>

        <CartWidget/>
        
        </nav>
    )
}

export default NavBar