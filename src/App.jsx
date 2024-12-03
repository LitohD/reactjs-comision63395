import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App(){

  return (
    <div>
      <NavBar/>
      <ItemListContainer saludito={"Bienvenido/a a mi primera entrega"}/>
    </div>
  )
}
export default App
