import {  BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Components/Home/index.js'
import Login  from './Components/Login/index.js';
import './App.css';
import FullItem from './Components/FullItem/index.js';

function App() {

  
  return (
    <Router>
       <Routes> 
        <Route  exact path='/' element={<Home/>}/> 
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/details' element={<FullItem/>} />
        
       

        </Routes>
    </Router>
  );
}

export default App;
