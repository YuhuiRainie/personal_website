import '../../App.css'
import Header from '../Header'
import React from 'react'
import Card from '../Cards'
import About from './About'

function Home () {
  return (
    <div>
      <Header />
      <About />
      <Card />
    </div>
  )
}
export default Home
