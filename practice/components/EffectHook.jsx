import React from 'react'
import BasicEffect from './BasicEffect'
import CounterEffect from './CounterEffect'
import FetchDataEffect from './FetchDataEffect'

const EffectHook = () => {
  return (
    <div>
      <h1> Use Effect hook practice challenge</h1>
      <BasicEffect />
      <CounterEffect />
      <FetchDataEffect />
    </div>
  )
}

export default EffectHook