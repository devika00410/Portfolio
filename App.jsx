import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
