import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './compnents/Navbar';
import { Collections } from './pages/Collections';
import { Qoutes } from './pages/Qoutes';
import { Search } from "./pages/Search";

function App() {
  return (
    <>
     <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/qoutes' element={<Qoutes/>}/>
                    <Route path='/collections' element={<Collections/>}/>
                    <Route path='/search' element={<Search/>}/>
                    
                    
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;
