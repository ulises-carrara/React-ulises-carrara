import './App.scss';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
     <NavBar/>
    
    <ItemDetailContainer/>
    </div>
  );
}
//<ItemListContainer seccion="Ofertas"/>
export default App;
