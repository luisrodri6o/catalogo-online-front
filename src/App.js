
import './App.css';
import {Abaut,Other,Products,SigIn} from './pages';
import {NavBar,Slider} from './Components';
import {images} from './images';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

function App() {
  return (
  
    <div className="App">
      
        <Slider slides={images} />
 
    <BrowserRouter>
        <NavBar/>
   
        <Routes>
          <Route path="/" element={<div><Products/></div>} />
          <Route path="/products" element={<div><Products/></div>} />
          <Route path="/abaut"    element={<div> <Abaut/> </div>} />
          <Route path="/other"    element={<div> <Other/> </div>} />
          <Route path="/sigin"    element={<div><SigIn/></div>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
