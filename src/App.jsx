import React from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>

      <SocialLinks/>
    </div>
  )
}

export default App
