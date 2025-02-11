import { createContext, useState } from 'react'

import './App.css'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import WM from '../components/WelcomeMessage'
import Exercise1 from '../components/Exercise1'
import Styling from '../components/Styling'
import UserState from '../components/UserState'
import EffectHook from '../components/EffectHook'
import UserContext from '../components/UserContext'
import UpdateUser from '../components/UpdateUser'

import CounterReduce from '../components/CounterReduce'
import FocusInput from '../components/FocusInput'

function App() {
 
  return (
    <>
      <Header />
      {/* <MainContent /> */}
      {/* <WM/> */}
      {/* <Exercise1/> */}
      {/* <Styling /> */}
      {/* <UserState /> */}
      {/* <EffectHook /> */}
      {/* <UserContext />
      <UpdateUser /> */}
      <CounterReduce />
      <FocusInput />
      <Footer/>
    </>
  )
}
export default App
