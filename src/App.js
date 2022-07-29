import "./App.css";
import { Abaut, Other, Products, SignIn } from "./pages";
import { NavBar, Slider } from "./Components";
import { images } from "./images";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <Slider slides={images} />

            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/abaut' element={<Abaut />} />
                    <Route path='/other' element={<Other />} />
                    <Route path='/sign-in' exact='true' element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
