import React from 'react'
import Navbar from '../Navbar'
import Home from './Home'
import Brobs from './Brobs'
import Work from './Work'
import Question from './Question'
import Touch from './Touch'
import Footer from './Footer'

function AllHome() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Brobs/>
      <Work/>
      <Question/>
      <Touch/>
      <Footer/>
    </div>
  )
}

export default AllHome
