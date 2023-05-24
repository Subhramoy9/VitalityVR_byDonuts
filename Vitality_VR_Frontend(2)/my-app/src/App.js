import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login';
import Home from './components/Home';
import Map from './components/Map';
import Download from './components/Download';
import {
  BrowserRouter as
    Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Strava from './components/Strava';
import Api from './components/Api';

const App = () => {
  return (
  <>
  <Router>
    
    <Routes>
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path = '/strava' element = {<Strava/>}/>
      <Route path = '/map' element = {<Map/>}/>
      <Route path = '/download' element = {<Download/>}/>
      <Route path = '/api' element = {<Api/>}/>
    </Routes>
  </Router>
 
  </>
    
  )
}

export default App