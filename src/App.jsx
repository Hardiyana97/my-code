import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./Componenst/Nav"
import Home from "./Componenst/Home"
import About from "./Componenst/About"
import Menu from "./Componenst/Menu"
import Team from "./Componenst/Team"
import Footer from "./Componenst/Footer"

function App() {

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
        <Footer />

      </Router>

    </div>
  )
}

export default App

