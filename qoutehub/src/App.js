import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './compnents/Navbar';
import { Collections } from './pages/Collections';
import { Qoutes } from './pages/Qoutes';

function App() {
  return (
    <>
     <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/qoutes' element={<Qoutes/>}/>
                    <Route path='/collections' element={<Collections/>}/>
                    
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;
