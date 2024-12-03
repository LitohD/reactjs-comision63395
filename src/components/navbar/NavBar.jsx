import "./navbar.scss"
import CartWidget from "./CartWidget"


const NavBar =() => {
    return (
        <nav className="navbar">
            <div className="brand">
                <img src="https://img.freepik.com/vector-premium/logotipo-monitor-tienda-digital-logotipo-productos-electronicos-o-logotipo-tienda-logotipo-tienda_372882-57.jpg?semt=ais_hybrid" alt="" />
                <p>Technology</p>
            </div>
            <ul className="categorias">
                <li>Celulares</li>
                <li>Tablets</li>
                <li>Notebooks</li>
            </ul>

            <CartWidget/>
        </nav>
    )
}

export default NavBar