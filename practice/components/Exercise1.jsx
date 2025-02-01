import React from 'react'
import Person from './Person'
import Product from './Product'
import ChildToParent from './ChildToParent'
import Weather from './Weather'
import UserStatus from './UserStatus'
import Greetingternary from './Greeting ternary'

const Exercise1 = () => {
  return (
    <div>
        {/* <Person name="Yadneya" age={14}/>
        <Product name="Laptop" price={1200}/> */}
        {/* <ChildToParent>
            <h1>Hello from Parent Component 1</h1>
        </ChildToParent>
        <ChildToParent>
            <Person name="Yadneya" age={24}/>
        </ChildToParent>
        <ChildToParent>
            <Product name="Laptop" price={1200}/>
        </ChildToParent> */}
        <Weather temperature={20} />
        <Weather temperature={10} />
        <Weather temperature={35} />

        <UserStatus isAdmin={true} loggedIn={true}/>
        <UserStatus isAdmin={false} loggedIn={true}/>

        <Greetingternary timeOfDay={"morning"} />
        <Greetingternary timeOfDay={"afternoon"} />
        
    </div>
  )
}

export default Exercise1