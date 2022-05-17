import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App