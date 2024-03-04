import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Registro from './components/Registro'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Registro />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>      
    </>
  )
}

export default App
