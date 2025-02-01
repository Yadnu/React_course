import React from 'react'
import Person from './Person'
import Product from './Product'
import ChildToParent from './ChildToParent'

const Exercise1 = () => {
  return (
    <div>
        {/* <Person name="Yadneya" age={14}/>
        <Product name="Laptop" price={1200}/> */}
        <ChildToParent>
            <h1>Hello from Parent Component 1</h1>
        </ChildToParent>
        <ChildToParent>
            <Person name="Yadneya" age={24}/>
        </ChildToParent>
        <ChildToParent>
            <Product name="Laptop" price={1200}/>
        </ChildToParent>

    </div>
  )
}

export default Exercise1