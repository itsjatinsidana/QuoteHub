import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './compnents/Navbar';
import { Collections } from './pages/Collections';
import { Qoutes } from './pages/Qoutes';
import { Search } from "./pages/Search";
import { Authors } from './pages/Authors';
import { Motivation } from './pages/Motivation';
import { Love } from './pages/Love';
import { Funny } from './pages/Funny';
import { Success } from './pages/Success';
import { Friendship } from './pages/Friendship';
function App() {
  return (
    <>
     <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/qoutes' element={<Qoutes/>}/>
                    <Route path='/collections' element={<Collections/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/authors' element={<Authors/>}/>
                    <Route path='/motivational' element={<Motivation/>}/>
                    <Route path='/love' element={<Love/>}/>
                    <Route path='/funny' element={<Funny/>}/>
                    <Route path='/success' element={<Success/>}/>
                    <Route path='/friendship' element={<Friendship/>}/>
                    
                    
                </Routes>
            </BrowserRouter>
    </>
  );
}

export default App;
