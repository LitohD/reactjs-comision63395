import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import './App.css'

function App(){

  return (
    <div className="container-app" >
      <BrowserRouter>
        <CartProvider>
          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Bienvenido/a a mi ecommerce"} /> }/>
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenido/a a mi ecommerce"} /> }/>
            <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
            <Route path="/Cart" element={<Cart/>} />

            <Route path="*" element={ <MoonLoader color="gold" />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
