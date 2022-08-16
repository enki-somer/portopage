import React from 'react'
import Header from '../src/Components/Header/Header'
import Nav from '../src/Components/Nav/Nav'
import About from '../src/Components/About/About'
import Services from '../src/Components/Services/Services'
import Experince from '../src/Components/Experince/Experince'
import Portfolio from '../src/Components/Portfolio/Portfolio'
import Contact from '../src/Components/Contact/Contact'
import Footer from '../src/Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experince />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App