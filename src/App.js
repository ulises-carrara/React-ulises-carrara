import './App.scss';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import{BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './pages/Contact';
import Home from './pages/Home';
import Productos from './pages/Products';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
        <Route path='/Productos' element={<Productos/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='*' element={<h1>Error 404</h1>}/>
      </Routes>
     
   
  
    </div>
    </BrowserRouter>
  );
}
 /*<ItemDetailContainer/>*/
export default App;
