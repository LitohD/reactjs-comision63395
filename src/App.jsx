import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetailContainer/ItemDetail'
import './App.css'

function App(){

  return (
    <div>
      <NavBar/>
      <ItemListContainer saludito={"Bienvenido/a a mi primera entrega"}/>
      <ItemDetailContainer/>
    </div>
  )
}
export default App
