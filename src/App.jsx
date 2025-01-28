import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'

function App(){

  return (
    <div className="container-app" >
      <BrowserRouter>
        <CartProvider>
          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenido/a a Technology"} /> }/>
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenido/a a Technology"} /> }/>
            <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />

            <Route path="*" element={ <div>Error 404 - pagina web no encontrada</div>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
