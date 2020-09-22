import '../../App.css'
import Header from '../Header'
import React from 'react'
import Card from '../Cards'
import About from './About'
import Footer from './Footer'

function Home () {
  return (
    <div>
      <Header />
      <About />
      <Card />
      <Footer />
    </div>
  )
}
export default Home
