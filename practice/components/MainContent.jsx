import React from 'react'
import JSXRules from './JSXRules'
import Greeting from './Greeting'
import ProductInfo from './ProductInfo'
import MapMethod from './MapMethod'


const MainContent = () => {
  return (
    <main>
        <h2>Main content</h2>
        <p> This web site is under creation</p>
        <JSXRules/>
        <div>
            <Greeting name="Yadneya" />
        </div>
        <ProductInfo />
        <MapMethod />
    </main>
  )
}

export default MainContent