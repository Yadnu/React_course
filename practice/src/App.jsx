import { useState } from 'react'

import './App.css'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import WM from '../components/WelcomeMessage'
import Exercise1 from '../components/Exercise1'
import Styling from '../components/Styling'

function App() {

  return (
    <>
      <Header />
      {/* <MainContent /> */}
      {/* <WM/> */}
      {/* <Exercise1/> */}
      <Styling />

      <Footer/>
    </>
  )
}

export default App
