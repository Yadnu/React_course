import { useState } from 'react'

import './App.css'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import WM from '../components/WelcomeMessage'

function App() {

  return (
    <>
      <Header />
      <MainContent />
      <WM/>
      <Footer/>
    </>
  )
}

export default App
